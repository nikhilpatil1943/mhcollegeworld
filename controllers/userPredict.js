import data from "../main/tp.js";

const userPredict = (req, res) => {
    const {
     percentile,dte,branch
    } = req.body;
    console.log(percentile,dte,branch)
    
    if (!percentile||!dte||!branch){
        res.status(400).json("Insufficient Inputs")
    }
    const predictor = data.predictor
    const selectDict = data.selectDict

    const branchdict =selectDict(branch)
    console.log(branchdict.length, branch,percentile)


    const result = predictor(dte,branchdict,percentile)
    return res.status(200).json(result)
}

export default userPredict;
