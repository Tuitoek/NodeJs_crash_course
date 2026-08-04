// argv 
console.log(process.argv);


//Process.env
console.log(process.env.USERNAME);

// pid
console.log(`\nProcess ID: ${process.pid}`);

// cwd
console.log(`\nCurrent Working Directory: ${process.cwd()}`);

// title
console.log(`\nProcess Title: ${process.title}`);

// memoryUsage
console.log(`\nMemory Usage:`, process.memoryUsage());