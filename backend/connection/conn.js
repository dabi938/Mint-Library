const mongoose =  require("mongoose");
mongoose.connect('mongodb+srv://dabihaile93:dabi@cluster0.qcdit.mongodb.net/Books-Store?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("connected"));
