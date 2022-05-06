import models from "./models.js"

export const getUser = async (req, res) => {
    const user = await models.find()
    res.json(user)
}

export const getUserById = async (req, res) => {
    const user = await models.findById(req.params.id)
    res.json(user)
}
export const saveUser = async (req, res) => {
    const savee = new models(req.body)
    const user = await savee.save()
    res.json(user)
}

export const editUser = async (req, res) => {
    const user = await models.updateOne({_id:req.params.id}, {$set:req.body})
    res.json(user)
}

export const deleteUser = async (req, res) => {
    const user = await models.deleteOne({_id:req.params.id})
    res.json(user)
}