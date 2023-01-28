import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "hcl-formatter" is now active!');

  let disposable = vscode.commands.registerCommand(
    "hcl-formatter.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from hcl-formatter!");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
