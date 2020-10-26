const fs = require('fs')
const data = require('./data.json')
const { age } = require('./utils')

exports.post = function(req, res) {

  const keys = Object.keys(req.body)

  for(key of keys) {
    if(req.body[key] == "")
      return res.send("Todos os campos são obrigatórios.")
  }

  req.body.id = Number(data.instructors.length + 1)
  req.body.birth = Date.parse(req.body.birth)
  req.body.created_at = Date.now()

  const { id, avatar_url, name, birth, gender, services, created_at } = req.body

  data.instructors.push({
    id, 
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Ocorreu uma falha ao enviar o formulário, tente novamente")
    
    return res.redirect("/instructors")
  })

}

exports.show = function(req, res) {
  const { id } = req.params
  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id
  })

  if(!foundInstructor) return res.send("Instrutor não encontrado")

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
  }

  return res.render("instructors/show", { instructor: instructor})
}

