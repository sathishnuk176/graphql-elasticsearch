import express from "express";
const app = express();

app.get("/articles", (req, res) => {
  res.json({
    title: "Youtube hanged",
    views: 12345,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Its running in ${process.env.PORT}`);
});
