function ask(question, format, callback) {
    var stdin = process.stdin, stdout = process.stdout;

    stdin.resume();
    stdout.write(question + ": ");

    stdin.once('data', function (data) {
        data = data.toString().trim();

        if (format.test(data)) {
            callback(data);
        } else {
            stdout.write("It should match: " + format + "\n");
            ask(question, format, callback);
        }
    });
}

ask("Choose Source SQS Environment: 1. Dev, 2. Test, 3. Prod >", /.+/, function (chooseenv) {
        var ChosenFunction = ReceiveInquiryMessage;
        if (choosefunc == "1")
            ChosenFunction = ReceiveInquiryMessage;
        else
            ChosenFunction = exit;

        var env = "dev";
        if (chooseenv == "1")
            env = "dev";
        else if (chooseenv == "2")
            env = "test";
        else if (chooseenv == "3")
            env = "prod";
        else
            ChosenFunction = exit;

        ChosenFunction(env);
    });
