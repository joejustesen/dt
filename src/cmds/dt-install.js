const log = console.log;


function showHelp() {
  log(`
usage: dt install <command-package-name> [options]
  
options:
  --cmd <cmd>   install the command package, but use the <cmd> string to invoke 
                the package instead of the default package command string.  This
                can be used to installation command packages with conflicting 
                command strings.
`);
}

module.exports = (args) => {
  if (args.h || args.help) {
    showHelp();
    return;
  }

  console.log(`install command`);
}