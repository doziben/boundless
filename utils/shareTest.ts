const shareEnabled: Boolean = "share" in navigator;

shareEnabled &&
  (onclick = () => {
    navigator
      .share({ title: "Share Job", url: "https://boundless.app/jobId" })
      .then(() => {
        console.log("shared Job");
      });
  });
