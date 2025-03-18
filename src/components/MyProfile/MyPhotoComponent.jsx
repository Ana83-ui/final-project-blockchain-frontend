import React, { useState } from 'react';

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    photo: null, // Aquí es donde guardaremos la URL de la foto de perfil
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];  // Obtener el archivo seleccionado
    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photo) {
      setError('Por favor selecciona una imagen');
      return;
    }

    const formData = new FormData();
    formData.append('photo', photo);

    setLoading(true);

    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,  // Enviar el archivo en el cuerpo de la solicitud
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Si usas un token de autenticación
      },
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data.photo) {
        // Actualizamos la foto de perfil con la URL que retorna el servidor
        setUser(prevUser => ({
          ...prevUser,
          photo: data.photo,
        }));
      } else {
        setError('Error al subir la imagen');
      }
    })
    .catch(err => {
      setLoading(false);
      setError('Hubo un error al subir la foto');
      console.error(err);
    });
  };

  return (
    <div className="profile">
      <h2>Perfil de {user.username}</h2>
      <p>Email: {user.email}</p>

      {/* Mostrar la foto de perfil actual */}
      {user.photo ? (
        <img src={`http://localhost:3000${user.photo}`} alt="Foto de perfil" />
      ) : (
        <p>No tienes foto de perfil</p>
      )}

      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handlePhotoChange} 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Subiendo...' : 'Subir Foto'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Profile;
