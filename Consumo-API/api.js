//1. Consumo de Datos desde una API:
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      });
  }

  console.log(obtenerUsuarios())
  
  //2. Procesamiento de Datos de una API:
  function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
      .then(usuarios => {
        const nombres = usuarios.map(usuario => usuario.name);
        console.log('Nombres de usuarios:', nombres);
      })
      .catch(error => {
        console.error('Hubo un problema con la petición:', error);
      });
  }
  
  imprimirNombresDeUsuarios();

  //3. Autenticación Simulada:
  function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
      usuario: 'admin',
      contraseña: '12345'
    };
  
    if (credenciales.usuario === usuarioPredefinido.usuario && 
        credenciales.contraseña === usuarioPredefinido.contraseña) {
      return true;
    } else {
      return false;
    }
  }
  
  const usuario = {
    usuario: 'admin',
    contraseña: '12345'
  };
  
  const resultado = autenticarUsuario(usuario);
  console.log(resultado); 

//4. Transformación de Datos:
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
      return {
        nombre: usuario.name,
        email: usuario.email
      };
    });
  }

  function imprimirUsuariosMapeados() {
    obtenerUsuarios()
      .then(usuarios => {
        const usuariosMapeados = mapearUsuarios(usuarios);
        console.log('Usuarios mapeados:', usuariosMapeados);
      })
      .catch(error => {
        console.error('Hubo un problema con la petición:', error);
      });
  }
  
  imprimirUsuariosMapeados();

//5. Validación de Formularios:
function validarFormulario(campos) {
    const { nombre, email, password } = campos;
  
    if (nombre && email && password) {
      return true;
    } else {
      return false;
    }
  }
  
  const formularioValido = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: 'password123'
  };
  
  const formularioInvalido = {
    nombre: '',
    email: 'juan.perez@example.com',
    password: 'password123'
  };
  
  console.log(validarFormulario(formularioValido));  
  console.log(validarFormulario(formularioInvalido));

//6. Paginación de Datos:
function obtenerPagina(datos, numeroDePagina) {
  const elementosPorPagina = 5;
  const inicio = (numeroDePagina - 1) * elementosPorPagina;
  const fin = inicio + elementosPorPagina;
  return datos.slice(inicio, fin);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

console.log(obtenerPagina(datos, 1)); 
console.log(obtenerPagina(datos, 2)); 

//7. Envío de Datos a una API:
function enviarDatos(data) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición POST');
      }
      return response.json(); 
    })
    .then(datosRespuesta => {
      console.log('Respuesta de la API:', datosRespuesta); 
    })
    .catch(error => {
      console.error('Hubo un problema con la petición POST:', error); 
    });
}

const nuevoPost = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

enviarDatos(nuevoPost);

//8. Búsqueda de Usuarios:
function buscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find(usuario => usuario.email === email);
}

const usuarios = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' }
];

console.log(buscarUsuarioPorEmail(usuarios, 'Shanna@melissa.tv'));

//9. Generación de Token de Autenticación:
function generarToken(usuario) {
  const payload = {
    id: usuario.id,
    nombre: usuario.name,
    email: usuario.email
  };

  const payloadStr = JSON.stringify(payload);

  const base64Payload = btoa(payloadStr);

  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const signature = "simulada-firma"; 

  const token = `${header}.${base64Payload}.${signature}`;

  return token;
}

const user = {
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz'
};

const token = generarToken(user);
console.log('Token JWT simulado:', token);

//10. Actualización de Información del Usuario:
function actualizarUsuario(usuario, cambios) {
  return {
    ...usuario,     
    ...cambios      
  };
}

const usuarioOriginal = {
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031'
};

const cambios = {
  name: 'Leanne Graham Updated',
  email: 'updated@april.biz'
};

const usuarioActualizado = actualizarUsuario(usuarioOriginal, cambios);
console.log('Usuario actualizado:', usuarioActualizado);