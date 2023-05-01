function main() {
  console.log("Better Jira: started running");

  const storyBlocks = document.getElementById("ghx-pool")
    .getElementsByClassName("ghx-swimlane");
  
  for (const storyBlock of storyBlocks) {
    console.log(storyBlock);

    const tasks = storyBlock.getElementsByClassName("ghx-issue");
    if (!tasks.length) {
      storyBlock.style.display = 'none';
    }
  }
}

main();
