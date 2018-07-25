$(function() {
    var idSelector = "idSelector";
    var rdsSelector = "rdsSelector";
    var s3Selector = "s3Selector";
    var startTimeSelector = "startTimeSelector";
    var endTimeSelector = "endTimeSelector";
    var fileSizeLimitSelector = "fileSizeLimitSelector";
    var transactionLimitSelector = "transactionLimitSelector";
    var filterStatementsSelector = "filterStatementsSelector";
    var filterUsersSelector = "filterUsersSelector";

    var startBtnSelector = "btnCaptureStart";

    $("div.content-placeholder").replaceWith(`
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3">
                <h4 class="text-center">Solar Cart Homepage</h4>
                <p class="text-center">Add page description</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-offset-2 col-lg-4 border-on-right">
                <p class=""><strong>Power Production</strong></p>
                <hr />
                <div class="" id="loadingModal" tabindex="-1" role="dialog"><div class="spinner"></div></div>
                <ul id="CaptureList" class="list-group"></ul>
            </div>
            <div class="col-lg-4 start-capture-form">
                <p class=""><strong>Power Draw</strong></p>
                <hr />
                
            </div>
        </div>
    </div>
    `);
    $("#loadingModal").show();
});
