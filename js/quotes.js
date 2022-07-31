const quotes = [
  {
    quote: '活動的な馬鹿より恐ろしいものはない。',
    author: 'ゲーテ',
  },
  {
    quote: '「目的を見つけよ。手段は後からついてくる」',
    author: 'ガンジー',
  },
  {
    quote: '「常識とは、18歳までに身に付けた偏見のコレクションである」',
    author: 'アインシュタイン',
  },
  {
    quote:
      '「翼を持たずに生まれてきたのなら、翼をはやすためにどんな障害も乗り越えなさい」',
    author: 'ココ・シャネル',
  },
  {
    quote: '「追いかけ続ける勇気さえあれば、夢は必ず叶います」',
    author: 'ウォルト・ディズニー',
  },
  {
    quote:
      '時には、問いが複雑になっているだけで、答えはごくシンプルなことだったりします」',
    author: 'ドクター・スース',
  },
  {
    quote: '「人間が授かった大いなる才能、それは共感する力です」',
    author: 'メリル・ストリープ',
  },
  {
    quote:
      '「今から20年後、あなたはやったことよりもやらなかったことを悔やむことになるだろう。そうなる前に、安穏とした港から船を出せ。自分自身の帆で貿易風を受け止めよ。真に求めるものを探求し、叶うことを願い、見出すのだ」',
    author: 'マーク・トウェイン',
  },
  {
    quote:
      '「過去は過ぎたが未来はまだ来ず。今、私はどちらからも自由だ。今まさに私は喜びを選ぶ」',
    author: 'ディーパック・チョップラ',
  },
  {
    quote:
      '「時間は限られているのだから、他人の人生を生きて自分の時間を無駄に過ごしてはいけない」',
    author: 'スティーブ・ジョブス',
  },
  {
    quote: '「あなたは自分らしくいるだけで、十分です」',
    author: 'メーガン・マークル',
  },
  {
    quote:
      '「人生は自転車に乗ることに似ています。バランスを保つためには、動き続けなくてはならないのです」',
    author: 'アルバート・アインシュタイン',
  },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
