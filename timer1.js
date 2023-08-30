const args = process.argv

args.forEach((timer) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer * 1000);
});