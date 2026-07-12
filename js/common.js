// SIMP-WOT Toolkit — Common Scripts
document.addEventListener('DOMContentLoaded', function () {

    // 1. Service Float (Contact Support)
    var service = document.createElement('a');
    service.href = 'https://qm.qq.com/q/TbPUJVQsEg';
    service.target = '_blank';
    service.className = 'service-float';
    service.innerHTML = '<img src="assets/images/4.png" alt="联系客服">';
    document.body.appendChild(service);

    // 2. Footer
    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML =
        '<p>作者：SIMP中国区经销商（小可） | QQ：3637487607</p>' +
        '<p style="margin-top:8px;font-size:12px;font-weight:bold;">' +
        '🎊 <span style="background:linear-gradient(90deg,#ff69b4,#d43f3a,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">' +
        '感谢 【咲夜琉命 QQ:514836229】的支持与帮助</span> 🎊</p>';
    var main = document.querySelector('main');
    if (main) main.appendChild(footer);
});
