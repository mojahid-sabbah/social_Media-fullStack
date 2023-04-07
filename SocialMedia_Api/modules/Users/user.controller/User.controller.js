import  { userModel } from "../../../DB/models/user.models.js" 


export const getAllUsers = async (req, res) => {

    const users = await userModel.find({})
    res.json({ message: "success", users })

}
export const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.find({ _id: id })
    res.json({ message: "success", user })

}

export const update = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const user = await userModel.findOneAndUpdate({ _id: id }, { email }, { new: true })
    res.json({ message: "success", user })
}

export const deleteuser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOneAndDelete({ _id: id })
    res.json({ message: "success", user })
}
export const stats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await userModel.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ])
        res.status(500).json({ message: "success", data })

    } catch (error) {

        res.status(500).json({ message: "catch", error })
    }
}

export const userInfo = async (req, res) => {
    const { _id } = req.user;
    const user = await userModel.findById({ _id })
    res.json({ message: "success", user })
}