import React, { useState } from 'react';
import { useEffect } from 'react';

const MyPhotoComponent = () => {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    photo: null, 
  });

  //carga el usuario al inicio
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')); // O lo que uses para almacenar el usuario
    if (userData && !user.username) {
      setUser(userData); // Si ya tienes la foto y demás datos almacenados
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];  
    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photo) {
      setError('Please select a photo');
      return;
    }

    const formData = new FormData();
    formData.append('photo', photo);

    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found, please log in again.');
      return;
    }


    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,  // Enviar el archivo en el cuerpo de la solicitud
      headers: {
        'auth-token': token,  // Si usas un token de autenticación
      },
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data.photo) {
        // Actualizamos la foto de perfil con la URL que retorna el servidor
        const updatedUser = { ...user, photo: data.photo };

        // Guardamos el usuario actualizado en el localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));

        setUser(updatedUser);  // Actualizamos el estado local con el usuario actualizado
      } else {
        setError('Error to update the photo');
      }
    })
    .catch(err => {
      setLoading(false);
      setError('There was an error uploading the photo');
      console.error(err);
    });
  };

  return (
    <div className="profile">
      {user.photo ? (
        <img 
          src={`http://localhost:3000/${user.photo}`}  
          alt="Profile photo" className='photo-profile'
        />
      ) : (
        <p>You don't have a profile photo</p>
      )}

      <form onSubmit={handleSubmit} className='form'>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handlePhotoChange} 
        />
        <button type="submit" disabled={loading} className='btn-modify'>
          {loading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>


      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MyPhotoComponent;
