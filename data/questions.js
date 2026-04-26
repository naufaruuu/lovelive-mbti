window.OPTION_VALUES = [2, 1, 0, -1, -2];

// 36 questions, 4 per trait dimension, balanced 2 positive-sign + 2 negative-sign per dim.
// All scenarios reskinned in school-idol / Love Live context (forming a club, practice,
// first live, setlist arguments, group conflicts, costumes, songwriting, graduation, etc.)
// so the discriminators land on the axes that actually separate Love Live characters
// (T, J, U, N, C) instead of the axes where every idol scores the same way (M, A).
window.QUESTIONS = [
  // ===== E (Extroversion): 2 positive, 2 negative =====
  { dim: 'E', sign: 1, text: {
    en: "Sign-up day for the school idol club. You walk straight up to the booth, put your name down, and pull a hesitating friend along with you.",
    id: "Hari pendaftaran klub school idol. Kamu langsung samperin booth-nya, tulis nama sendiri, sekalian narik temen yang masih ragu-ragu buat ikut.",
    ja: "スクールアイドル部の入部受付日。迷わずブースに歩み寄り、自分の名前を書き、ためらっている友達も引っ張って連れて行く。"
  } },
  { dim: 'E', sign: 1, text: {
    en: "After a brutal day of choreo practice, your first thought is texting the group: 'crepes? karaoke?' rather than going home alone.",
    id: "Abis seharian latihan koreo yang capek banget, refleks pertama kamu nge-chat grup: 'crepes yuk? karaoke?', bukan langsung pulang sendirian.",
    ja: "ハードな振り付け練習を終えた後、家に帰るより先に「クレープ？カラオケ？」とグループにメッセージを送ってしまう。"
  } },
  { dim: 'E', sign: -1, text: {
    en: "Between performing on stage and writing songs alone in your room, the songwriting feels far more like 'real' idol work to you.",
    id: "Antara tampil di panggung sama nulis lagu sendirian di kamar, justru bagian nulis lagu yang lebih kerasa kayak 'kerjaan idol beneran' buat kamu.",
    ja: "ステージで歌うことと部屋で一人作詞作曲することなら、後者の方が自分にとって本当の「アイドルの仕事」のように感じる。"
  } },
  { dim: 'E', sign: -1, text: {
    en: "Replying to a stack of fan letters drains you more than a three-hour rehearsal does.",
    id: "Bales fan letter yang numpuk lebih bikin kamu capek daripada latihan 3 jam non-stop.",
    ja: "山積みのファンレターに返事を書く方が、3時間ぶっ続けのリハーサルよりも消耗する。"
  } },

  // ===== J (Judging): 2 positive, 2 negative =====
  { dim: 'J', sign: 1, text: {
    en: "You map practice down to 15-minute blocks: warm-up, vocal drill, choreo run, cool-down. Improvising the order feels wrong.",
    id: "Kamu bikin jadwal latihan per 15 menit: pemanasan, drill vokal, run koreo, pendinginan. Kalau urutannya diacak rasanya salah aja.",
    ja: "練習を15分単位で組み立てる：ウォームアップ、ボイスドリル、振り通し、クールダウン。順番を即興で変えられるとモヤッとする。"
  } },
  { dim: 'J', sign: 1, text: {
    en: "Costumes, props, mic batteries, setlist printout — you've checked them twice before anyone else even arrives at the venue.",
    id: "Kostum, properti, baterai mic, print-out setlist — kamu udah cek dua kali bahkan sebelum anggota lain dateng ke venue.",
    ja: "衣装、小道具、マイクの電池、セットリスト — 他のメンバーが会場に到着する前に既に2回チェックを済ませている。"
  } },
  { dim: 'J', sign: -1, text: {
    en: "It's the night before the live and the group still hasn't locked the setlist. You're not panicking — you'll figure it out on stage.",
    id: "Live tinggal besok dan grup masih belom fix setlist. Kamu santai aja, nanti juga bisa improvisasi di panggung.",
    ja: "ライブは明日なのに、まだセットリストが決まっていない。慌てない — ステージで何とでもなる。"
  } },
  { dim: 'J', sign: -1, text: {
    en: "Mid-rehearsal you suddenly change the formation because it 'feels better,' even if it means redoing what you locked in yesterday.",
    id: "Lagi tengah-tengah latihan, kamu tiba-tiba ganti formasi karena 'kerasa lebih enak', walaupun harus ngulang dari yang udah fix kemarin.",
    ja: "リハーサルの途中で「こっちの方がしっくりくる」とフォーメーションをいきなり変える。昨日確定したものをやり直すことになっても気にしない。"
  } },

  // ===== T (Thinking): 2 positive, 2 negative =====
  { dim: 'T', sign: 1, text: {
    en: "Picking the title song: you weigh streaming trends and crowd-energy data over which song the group personally loves most.",
    id: "Milih lagu utama, kamu lebih ngandelin data tren streaming dan respons crowd, bukan sekadar lagu yang paling disukai sama anggota grup.",
    ja: "タイトル曲を決める時、メンバーが個人的に好きな曲よりも、ストリーミング傾向や観客の盛り上がりデータを重視する。"
  } },
  { dim: 'T', sign: 1, text: {
    en: "When a member's vocals are dragging the harmony down, you say so directly in the meeting — kindly, but you don't sugarcoat it.",
    id: "Kalau ada anggota yang vokalnya bikin harmoni jelek, kamu bilang langsung di rapat — tetep sopan, tapi nggak basa-basi.",
    ja: "メンバーの歌唱がハーモニーを崩していると気づいたら、ミーティングで率直に指摘する — 優しく、でもオブラートには包まない。"
  } },
  { dim: 'T', sign: -1, text: {
    en: "A teammate breaks down crying during a ballad rehearsal. Your eyes fill up too — you can't help feeling what she's feeling.",
    id: "Pas latihan lagu ballad, ada anggota yang nangis. Mata kamu juga ikut basah — kebawa perasaan dia.",
    ja: "バラードのリハーサル中、メンバーが泣き出す。気づけば自分も涙ぐんでいる — 相手の気持ちが流れ込んでくる。"
  } },
  { dim: 'T', sign: -1, text: {
    en: "Choosing the encore song, you'd rather go with the one that makes everyone happy than the one that's 'objectively best.'",
    id: "Milih lagu encore, kamu lebih milih lagu yang bikin semua orang seneng daripada yang 'paling bagus secara objektif'.",
    ja: "アンコール曲を決める時、「客観的に最も良い」曲よりも、皆が幸せになれる曲を選びたい。"
  } },

  // ===== C (Confidence): 2 positive, 2 negative =====
  { dim: 'C', sign: 1, text: {
    en: "Center position on the new song? Of course it's yours — you've been ready for it for months.",
    id: "Posisi center buat lagu baru? Ya jelas punya kamu — kamu udah siap dari berbulan-bulan lalu.",
    ja: "新曲のセンターポジション？もちろん自分のもの — 何ヶ月も前から準備してきた。"
  } },
  { dim: 'C', sign: 1, text: {
    en: "The producer tells you to cut your verse. You disagree, and you say so plainly in front of everyone — no apology, no hedging.",
    id: "Produser nyuruh kamu potong bagian verse-mu. Kamu nggak setuju, dan ngomong terus terang di depan semua orang — tanpa minta maaf, tanpa basa-basi.",
    ja: "プロデューサーから「君のヴァースをカットする」と言われる。納得できないなら、皆の前ではっきりそう言う — 謝罪も遠回しもなしで。"
  } },
  { dim: 'C', sign: -1, text: {
    en: "Backstage before your first live, you're convinced you're the weakest link no matter how much the others reassure you.",
    id: "Backstage sebelum live pertama, kamu yakin banget kamu yang paling lemah di grup, walaupun yang lain udah berkali-kali nenangin.",
    ja: "初ライブの楽屋裏、メンバーがどれだけ励ましてくれても「自分が一番足を引っ張っている」と思い込んでしまう。"
  } },
  { dim: 'C', sign: -1, text: {
    en: "When fans tag you online with praise, your first thought is 'they'll figure out soon I'm not actually that good.'",
    id: "Pas fans tag kamu di sosmed sambil muji, pikiran pertama kamu: 'mereka bakal sadar kok kalau aku sebenernya nggak sebagus itu'.",
    ja: "ファンがSNSで自分を褒めるタグ付けをしてくれた時、最初に思うのは「そのうちバレる、自分はそこまで上手くない」。"
  } },

  // ===== M (Ambition): 2 positive, 2 negative =====
  { dim: 'M', sign: 1, text: {
    en: "A rival school's group drops a hit MV. By midnight you're already drafting an even stronger response with your members.",
    id: "Grup dari sekolah saingan rilis MV yang viral. Tengah malem kamu udah mulai nyusun respons yang lebih kuat sama anggota grup.",
    ja: "ライバル校のグループが話題のMVを公開する。深夜にはもう、メンバーと一緒にそれを超える曲の構想を練っている。"
  } },
  { dim: 'M', sign: 1, text: {
    en: "You set targets that scare your members a little — Tokyo Dome, winning Love Live outright — because nothing smaller is worth it.",
    id: "Kamu naro target yang bikin anggota grup agak takut — manggung di Tokyo Dome, menang Love Live total — karena yang lebih kecil dari itu nggak worth it.",
    ja: "メンバーが少し怖気づくくらいの目標を設定する — 東京ドーム、ラブライブ優勝 — それ未満では意味がない。"
  } },
  { dim: 'M', sign: -1, text: {
    en: "Win or lose at regionals, what matters most to you is that the group genuinely enjoyed the performance together.",
    id: "Menang atau kalah di regional, yang paling penting buat kamu adalah grupnya beneran nikmatin tampil bareng-bareng.",
    ja: "地区大会で勝とうが負けようが、自分にとって一番大事なのは、メンバーが心から一緒に楽しめたかどうかだ。"
  } },
  { dim: 'M', sign: -1, text: {
    en: "If 'making it big' meant the group falling apart, you'd choose to stay small and keep the friendships every time.",
    id: "Kalau 'jadi terkenal' berarti grupnya bubar, kamu mending tetep kecil aja asal pertemanannya tetep utuh.",
    ja: "「大きくなる」ことがグループの解散を意味するなら、いつだって小さいままで友情を保つ方を選ぶ。"
  } },

  // ===== O (Optimism): 2 positive, 2 negative =====
  { dim: 'O', sign: 1, text: {
    en: "Costumes lost, venue rained out, choreo half-finished — you're already laughing about the story you'll tell after the live.",
    id: "Kostum ilang, venue keujanan, koreo masih setengah jadi — kamu udah ketawa-ketawa mikirin cerita kocak yang bakal diceritain abis live.",
    ja: "衣装は紛失、会場は雨で中止寸前、振付は半分しか覚えてない — それでも「ライブ後に語る笑い話」を想像して既に笑っている。"
  } },
  { dim: 'O', sign: 1, text: {
    en: "Student council rejects your idol club application. Your honest first thought is 'okay, what's the next angle?', not despair.",
    id: "OSIS nolak proposal klub idol kamu. Pikiran pertama kamu jujurnya 'oke, strategi berikutnya apa nih?', bukan mau nyerah.",
    ja: "生徒会にアイドル部の申請を却下される。落ち込むより先に「じゃあ次の手はどうしよう」と素直に考えてしまう。"
  } },
  { dim: 'O', sign: -1, text: {
    en: "Every time a live gets announced, your stomach drops as you imagine every way it could go wrong on stage.",
    id: "Tiap kali jadwal live diumumin, perut kamu langsung mules ngebayangin semua hal yang bisa salah di panggung.",
    ja: "ライブが告知されるたびに胃が落ち込む — ステージで起こりうる最悪のシナリオが次々と浮かんでしまう。"
  } },
  { dim: 'O', sign: -1, text: {
    en: "Even after a great rehearsal, you replay every tiny mistake on the way home and can't sleep that night.",
    id: "Walau latihan tadi lancar, di perjalanan pulang kamu muter ulang tiap kesalahan kecil di kepala dan akhirnya nggak bisa tidur.",
    ja: "リハーサルが上手くいった日でも、帰り道に小さなミスを何度も反芻してしまい、その夜は眠れない。"
  } },

  // ===== A (Agreeableness): 2 positive, 2 negative =====
  { dim: 'A', sign: 1, text: {
    en: "Two members fight over the choreo direction. You spend the night DMing each one separately to smooth things over before tomorrow.",
    id: "Dua anggota berantem soal arah koreo. Kamu rela begadang DM-an satu-satu sama mereka berdua biar besok udah baikan.",
    ja: "メンバー二人が振付の方向性で衝突する。明日までに何とかしようと、夜通し一人ずつDMでフォローして関係を修復する。"
  } },
  { dim: 'A', sign: 1, text: {
    en: "A new member is struggling to keep up. You stay 30 minutes after every practice to drill her one-on-one, even when you're exhausted.",
    id: "Anggota baru susah ngejar latihan. Walau kamu udah capek, kamu tetep nemenin dia 30 menit ekstra abis latihan buat drill bareng.",
    ja: "新メンバーがついていけずに苦労している。自分も疲れていても、毎日の練習後30分残ってマンツーマンで特訓に付き合う。"
  } },
  { dim: 'A', sign: -1, text: {
    en: "If giving the strongest singer every chorus would win you Love Live, you'd push for that — even if other members feel sidelined.",
    id: "Kalau ngasih semua bagian chorus ke vokalis terkuat bakal bikin grup menang Love Live, kamu bakal dorong itu — walaupun anggota lain ngerasa dianggep sebelah mata.",
    ja: "もし最強のボーカリストに全てのサビを任せれば優勝できるなら、たとえ他のメンバーが脇に追いやられた気分になっても、その案を押し通す。"
  } },
  { dim: 'A', sign: -1, text: {
    en: "When competing against another idol group, you don't owe them warmth — winning is winning, and feelings aren't part of the math.",
    id: "Pas tanding lawan grup idol lain, kamu nggak ngerasa harus ramah-ramahan — menang ya menang, perasaan bukan bagian dari hitungan.",
    ja: "他のアイドルグループと競う時、相手に温情をかける義理はない — 勝ちは勝ち、感情は計算に入れない。"
  } },

  // ===== U (Uniqueness): 2 positive, 2 negative =====
  { dim: 'U', sign: 1, text: {
    en: "The 'safe' choreo would land fine. You pitch the weird one with a dance break nobody's tried at Love Live before.",
    id: "Koreo yang 'aman' sebenernya udah cukup oke. Tapi kamu tetep ngusulin yang aneh, ada dance break yang belom pernah ada di Love Live.",
    ja: "「無難」な振付でも普通に成立する。それでも、ラブライブで誰もやったことのないダンスブレイクを入れた変な案を提案する。"
  } },
  { dim: 'U', sign: 1, text: {
    en: "Your group's costume design is on-trend and cute. You suggest scrapping it for something nobody at any school idol event has ever worn.",
    id: "Desain kostum grup kamu udah trendy dan imut. Tapi kamu ngusulin di-scrap aja, ganti yang belom pernah dipake di event school idol manapun.",
    ja: "グループの衣装デザインは流行りに合ってて可愛い。それを破棄して、どのスクールアイドルイベントでも誰も着たことのない方向に振ろうと提案する。"
  } },
  { dim: 'U', sign: -1, text: {
    en: "If becoming an idol meant breaking from a normal school path, you'd seriously hesitate. A stable life still matters to you.",
    id: "Kalau jadi idol berarti harus ninggalin jalur sekolah yang normal, kamu bakal mikir keras. Buat kamu, hidup yang stabil tetep penting.",
    ja: "アイドルになることが普通の学業ルートから外れることを意味するなら、本気で躊躇する。安定した人生は依然として大事だ。"
  } },
  { dim: 'U', sign: -1, text: {
    en: "You'd rather perfect a proven cover song than risk an original that might flop in front of fans.",
    id: "Kamu lebih milih nyempurnain cover lagu yang udah terbukti bagus daripada gambling lagu original yang mungkin gagal di depan fans.",
    ja: "ファンの前で滑るかもしれないオリジナル曲に賭けるくらいなら、実績のあるカバー曲を完璧に仕上げる方を選ぶ。"
  } },

  // ===== N (Intuition): 2 positive, 2 negative =====
  { dim: 'N', sign: 1, text: {
    en: "Mid-rehearsal you're already imagining the music video, the album cover, the world-tour shirt design — even though the song isn't recorded yet.",
    id: "Lagi tengah-tengah latihan, kamu udah ngebayangin music video-nya, cover album, sampe desain kaos world tour — padahal lagunya belom direkam.",
    ja: "リハーサルの最中なのに、既にMV、アルバムジャケット、ワールドツアーのTシャツデザインまで頭の中で組み立てている — 曲はまだ録音されてもいないのに。"
  } },
  { dim: 'N', sign: 1, text: {
    en: "When learning new choreo, you want to grasp the *story* of the song first — what it means, where it goes — and the steps come after.",
    id: "Pas belajar koreo baru, kamu pengen ngerti dulu 'cerita' lagunya — maknanya apa, mau ke mana — baru abis itu masuk ke step-step-nya.",
    ja: "新しい振付を覚える時、まず曲の「物語」 — 意味、行き先 — を掴みたい。具体的なステップはそのあとでいい。"
  } },
  { dim: 'N', sign: -1, text: {
    en: "Don't tell me the *concept* of the choreo. Just show me the actual moves and I'll learn by copying you.",
    id: "Nggak usah jelasin 'konsep' koreo-nya panjang lebar. Kasih liat aja gerakannya, nanti aku tiruin.",
    ja: "振付の「コンセプト」なんて説明しなくていい。実際の動きを見せてくれれば、真似して覚えるから。"
  } },
  { dim: 'N', sign: -1, text: {
    en: "You trust a senpai's proven training drills more than some new theory in a sports-science article you read online.",
    id: "Kamu lebih percaya drill latihan ala senpai yang udah terbukti, daripada teori baru di artikel sport-science yang baru kamu baca online.",
    ja: "ネットで読んだスポーツ科学の新理論より、先輩が実際に積み上げてきた練習ドリルの方を信頼する。"
  } }
];
