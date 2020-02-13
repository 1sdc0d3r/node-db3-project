const db = require("../data/");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where("id", id) /*? same as {id}*/
    .then(scheme => (!scheme ? null : scheme));
  // .first();
}

function findSteps(id) {
  return db("steps st")
    .where(`s.id, ${id}`)
    .join(`schemes s, st.scheme_id, s.id`)
    .select("s.scheme_name, st.step_number, instructions");
}
/*select s.scheme_name, st.step_number, instructions from steps st
join schemes as s on st.scheme_id=s.id
where s.id=${id}*/

function add(scheme) {
  return db("schemes").insert(scheme);
}
//? README  Resolves to the newly inserted scheme, including `id`.

// function addStep(stepData, schemeId) {
// return db("steps").insert(stepData)
// }

function update(changes, id) {
  return db("steps")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del()
    .then(response => (!response ? null : response));
}
