(()=>{

// パスワード入力欄とボタンのHTMLを取得
const $btn_pass = document.getElementById("btn_passview"); 
const $input_pass = document.getElementById("input_pass");

$btn_pass.addEventListener('click', (e) => {
    e.preventDefault();
    
    // パスワード入力欄のtype属性を確認
    if( $input_pass.type === 'password'){
        $input_pass.type = 'text';
        $btn_pass.innerText = '隠す';
    } else {
        $input_pass.type = 'password';
        $btn_pass.innerText = '見る';
    }
});

})();