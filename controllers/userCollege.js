import data from "../main/tp.js";
import dsedata from "../main/dsetp.js";


const userCollege = (req, res) => {
  const {
    percentile,
    exam,
    category,
    branch,
    district,
    gender,
    dist1,
    dist2,
    dist3,
  } = req.body;
  console.log(  percentile,
    exam,
    category,
    branch,
    district,
    gender,
    dist1,
    dist2,
    dist3,)

  if (
    !percentile ||
    !exam||
    !category ||
    !gender ||
    !branch ||
    !district ||
    !dist1 ||
    !dist2 ||
    !dist3
  ) {
    return res.status(400).json({ message: "insufficient Inputs" });
  }
     
  if(exam==='CET'){
    const dictfinal=data.cet_give_final_dict(category,gender,percentile,district,dist1,dist2,dist3,branch)
    console.log("this is cet",dictfinal)
    return res.status(200).json(dictfinal)
  }else if(exam==='dse'){
    const dictfinal=dsedata.dsegivefinal(category,gender,dist1,dist2,dist3,branch,percentile)
    return res.status(200).json(dictfinal)
  }
};

export default userCollege;
