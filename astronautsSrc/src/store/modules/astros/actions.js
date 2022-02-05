export default {
  async registerAstro(context, data) {
    const response = await fetch(
      'https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros.json',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    );

    const responseData = await response.json();

    data = {
      ...data,
      id: responseData.name
    };

    context.commit('registerAstro', data);
  },
  async setAstros(context, data) {
    context.commit('setAstros', data);
  },
  async loadAstros(context) {
    const response = await fetch(
      'https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros.json'
    );

    const responseData = await response.json();

    const astros = [];

    for (const key in responseData) {
      astros.unshift({
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        birthDate: responseData[key].birthDate,
        superpower: responseData[key].superpower,
        descr: responseData[key].descr
      });
    }
    context.commit('setAstros', astros);
  },

  deleteAstro(context, id) {
    fetch(
      `https://astronauts-48830-default-rtdb.europe-west1.firebasedatabase.app/astros/${id}.json`,
      {
        method: 'DELETE'
      }
    );
    context.commit('deleteAstro', id);
  }
};
