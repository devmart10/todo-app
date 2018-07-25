$(function() {
    injectNavTop();
    injectSidebar();
});

// function that inject the nav html into any div with the placeholder class
function injectNavTop() {
    $("div.nav-placeholder").replaceWith(`
    <nav class="navbar navbar-custom z-depth-1" role="navigation">
        <div id="nav-container">
            <div class="navbar-header">
                <a class="navbar-brand menu-brand page-scroll" href="javascript:void(0)">Menu</a>
                <a class="navbar-brand crt-brand page-scroll" href="dashboard">ESW Solar Cart</a>
            </div>
        </div>
    </nav>`);
}

// function that inject the sidebar html into any div with the placeholder class
function injectSidebar() {
    $("div.sidebar-placeholder").replaceWith(`
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
            <li class="sidebar-brand">
                <a href="javascript:void(0)">
                    ESW Solar Cart
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">Dashboard</a>
            </li>
            <li>
                <a href="javascript:void(0)">Solar Usage</a>
            </li>
            <li>
                <a href="javascript:void(0)">Analyze Results</a>
            </li>
            <li>
                <a href="javascript:void(0)">Settings</a>
            </li>
        </ul>
    </nav>`);
}

