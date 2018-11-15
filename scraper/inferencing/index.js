const Snowball = require('snowball')

const buildTree = require('./build')
const infer_tfidf = require('./infer')

// the keywords file is bundled using webpack as keywordsjson
// it must NOT have .json as an extension in the bundle because then it goes over a file size limit with mozilla

let databaseWorkerPort;

onmessage = function(m) {
  switch (m.data.type) {
  case 'database_worker_port':
    databaseWorkerPort = m.data.port;
    break;
    
  case 'content_script_to_inferencing':
    inferencingMessageListener(m.data.article, m.data.mainFrameReqId, m.data.tabId);
    break;
  }
};


function stem(text, all_words, words2idx_dict) {
  var stemmer = new Snowball('English');
  var cur_word = null;
  let tokens = [];
  for (let i = 0; i < text.length; i++) {
    stemmer.setCurrent(text[i]);
    stemmer.stem();
    cur_word = stemmer.getCurrent();
    if (all_words.has(cur_word)) {
      tokens.push(words2idx_dict[cur_word]);
    }
  }
  return [tokens, text.length];
}


async function infer(text) {
  
  let result_category = null;
  let conf_score = 0;
  const path = './scraper/inferencing/data/'
  const tr_struc = await buildTree.build(path + 'keywords.json', path + 'words2idx_dict.json', path + 'cut_one_dict.json');
  const tr = tr_struc[0];
  const word2idx = tr_struc[1];
  const allExistWords = tr_struc[2];
  const cutOneDict = tr_struc[3];


  text = text.toLowerCase();
  let stemmed = stem(text.split(" "), allExistWords, word2idx);
  text = stemmed[0];
  let totalLength = stemmed[1];

  const category = await infer_tfidf.infer(text, tr, totalLength);
  result_category = cutOneDict[category[0].name];
  conf_score = category[1];

  return result_category 
}

module.exports.infer = infer
