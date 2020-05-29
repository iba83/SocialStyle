$(function(){

  var draHtml = `
  <div class = "result">
  <img src="public/dr.png" alt="ドライビング" class = "resultpic">
  <p class = "top">あなたは<span class = "typeName">ドライビング</span>タイプ</p>
  <p class = "trend">（自己主張 : 強 / 感情表現 : 弱）</p>
  <p class = "introduction">
    生まれついてのリーダー気質。戦略、勝負が大好きで、指示されるのは大嫌い。<br>
    自分の道は自分で決める。
    口癖は「で、結論は？」
    <br>
    チームにいると方向性が明確になるが、反面「基準は自分」と考えてしまう為、<br>
    メンバーの個々の差を把握することが後回しになってしまっているかも。<br>
    相手と意見を戦わせることを恐れず、はっきり言うことが多いので、衝突もありますが、<br>
    上昇意欲に乗って出世していく人が多いのもこのタイプ。<br>
  </p>
  <div class = "character">
    <div class="action">
      <p class="actionItem">行動</p>
      <ul>
        <li>・困難を引き受ける</li>
        <li>・意思決定は事実を比較して考え素早い</li>
        <li>・費用対効果を重要視する</li>
        <li>・チームをコントロールする</li>
      </ul>
    </div>
    <div class="action action2">
      <p class="actionItem">話し方</p>
      <ul>
        <li>・話すペースは速く、間を取らない</li>
        <li>・要点、結果だけを簡潔に伝える</li>
        <li>・相手の目をしっかり見て話す</li>
        <li>・身振り手振りは少なく表情は一定</li>
      </ul>
    </div>
  </div>
</div>
  `

  var exHtml= `
  <div class = "result">
  <img src="public/ex.png" alt="エクスプレッシブ" class = "resultpic">
  <p class = "top">あなたは<span class = "typeName">エクスプレッシブ</span>タイプ</p>
  <p class = "trend">（自己主張 : 強 / 感情表現 : 強）</p>
  <p class = "introduction">
    生み出す楽しさを共有、チームの開拓者。仕事も勉強も楽しいかが重要。<br>
    細かいことは気にせず、やってみてから考える。
    口癖は「いいね！」<br>
    おしゃべり好きで沈黙が苦手なこのタイプはチームのムードメーカー。<br>
    楽しさをを優先するあまり、自身の意向が反映されていない事柄についてはやや積極さに欠ける印象が。<br>
    どーん、ばーんといった擬音語を多用して、話は結構大げさになりがちですが、<br>
    他のメンバーが思いつかないアイデアを提言できる、チームに新風を吹き込むことができるのがこのタイプ。
  </p>
  <div class = "character">
    <div class="action">
      <p class="actionItem">行動</p>
      <ul>
        <li>・新しくユニークなものを生み出す</li>
        <li>・まずは、強い人間関係を築く</li>
        <li>・中心になって、みんなで盛り上がって結果を出す</li>
        <li>・直感で判断する</li>
      </ul>
    </div>
    <div class="action action2">
      <p class="actionItem">話し方</p>
      <ul>
        <li>・大きめの声で、大きな抑揚に感情</li>
        <li>・テンポ（ノリ）よく、間を取らない</li>
        <li>・身振り手振りも大いに活躍する</li>
        <li>・語尾は断言</li>
      </ul>
    </div>
  </div>
</div>
  `

  var anaHtml = `
  <div class = "result">
  <img src="public/ana.png" alt="アナリティカル" class = "resultpic">
  <p class = "top">あなたは<span class = "typeName">アナリティカル</span>タイプ</p>
  <p class = "trend">（自己主張 : 弱 / 感情表現 : 弱）</p>
  <p class = "introduction">
    やるべきことは正確に、まずは計画、事前準備。ミスは少なく確実に。<br>
    コツコツと継続してこそ価値があると考える。
    口癖は、「特にありません」<br>
    周りから見るといつもマイペースで空気を読まずに淡々と仕事をこなす職人気質。<br>
    人に振り回されることを嫌い、一人でできる仕事を選びがち。<br>
    情報収集に時間をかけ、結果までのスピードよりも過程の完全さにこだわりすぎてしまうことも。<br>
    全体を把握し、ミスを事前に防ぐ慎重さを持つのがこのタイプ。
  </p>
  <div class = "character">
    <div class="action">
      <p class="actionItem">行動</p>
      <ul>
        <li>・組織では常識や規律を守る</li>
        <li>・情報収集に時間をかけて意思決定する</li>
        <li>・人間関係より、仕事や課題に興味</li>
        <li>・慎重に検討を重ねてから、実行に移す</li>
      </ul>
    </div>
    <div class="action action2">
      <p class="actionItem">話し方</p>
      <ul>
        <li>・順番に話をしていく（説明→結論）</li>
        <li>・論理的なかつ秩序がある話</li>
        <li>・落ち着いてソフトな印象</li>
        <li>・一文は長く、言い切ることを避ける</li>
      </ul>
    </div>
  </div>
</div>
  `

  var emiHtml = `
  <div class = "result">
  <img src="public/ami.png" alt="エミアブル" class = "resultpic">
  <p class = "top">あなたは<span class = "typeName">エミアブル</span>タイプ</p>
  <p class = "trend">（自己主張 : 弱 / 感情表現 : 強）</p>
  <p class = "introduction">
    みんなのためなら頑張れる、人間関係は波風立てずに穏やかに。<br>
    人間関係をまず構築、チームを支える調停役。
    口癖は「すみません」<br>
    いつもニコニコいい人オーラ全開で自分の意見を押し付けることなく、共感上手な聞き上手ですが<br>
    勝手に「味方だよね？」と思われて、人間関係問題に巻き込まれることも。<br>
    チームの調和を作ることに注力するあまり、自分のことが疎かになりがち。<br>
    協力・平和といった基本的な関係構築を作るためには必要不可欠なこのタイプ。
  </p>
  <div class = "character">
    <div class="action">
      <p class="actionItem">行動</p>
      <ul>
        <li>・組織では人を支援する</li>
        <li>・課題解決前に、まず人間関係を築く</li>
        <li>・１対１の人間関係を大事にする</li>
        <li>・みんなの意見を取り入れる</li>
      </ul>
    </div>
    <div class="action action2">
      <p class="actionItem">話し方</p>
      <ul>
        <li>・ソフトな抑揚で、穏やかに話す</li>
        <li>・ゆっくりめで、間を取りながら話す</li>
        <li>・皆にソフトにアイコンタクトする</li>
        <li>・基本的に口角が上がり、笑顔が多い</li>
      </ul>
    </div>
  </div>
</div>
  `
  var btn = `
  <div class = "again">
  <button class = "againbtn">もう一回</button>
</div>
  `

  $(".publics").animate({
    "top":"-100px"
  },250);
  $(".publics").animate({
    "top":"20px"
  },500);

  $(".submit").on("click", function(){

    $(".result").remove();
    $(".again").remove();

    var a = $(".typeA:checked").length
    var b = $(".typeB:checked").length
    var c = $(".typeC:checked").length
    var d = $(".typeD:checked").length

    if ($("input:checked").length < 18){
      alert("未回答の問があります");
    }else{
      if (a>=5 && d>=5){
        $(".main").append(draHtml);
        $(".main").after(btn);
      } else if (a>=5 && c>=5){
        $(".main").append(exHtml);
        $(".main").after(btn);
      } else if (b>=5 && d>=5){
        $(".main").append(anaHtml);
        $(".main").after(btn);
      } else if (b>=5 && c>=5){
        $(".main").append(emiHtml);
        $(".main").after(btn);
      }
    }

    $(window).scrollTop(4375);

    $(".againbtn").on("click", function(){
      $(".result").remove();
      $(".again").remove();
      $(".radiobtn").prop('checked', false);
      $(window).scrollTop(0);
    })

  })
});