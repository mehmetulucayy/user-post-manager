import { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "@/features/users/users.service";
import { User } from "@/features/users/users.types";
import styles from "./UsersPage.module.css";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({ name: '', username: '', email: '' });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (err) {
      setError("Kullanıcılar yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async () => {
    if (!newUser.name || !newUser.username || !newUser.email) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      const createdUser = await createUser({ ...newUser, id: users.length + 1 });
      setUsers([...users, createdUser]);
      setNewUser({ name: '', username: '', email: '' });
    } catch (err) {
      setError("Kullanıcı oluşturulurken bir hata oluştu.");
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError("Kullanıcı silinirken bir hata oluştu.");
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setNewUser({ name: user.name, username: user.username, email: user.email });
  };

  const handleUpdateUser = async () => {
    if (!editingUser) return;
    try {
      const updatedUser = await updateUser({
        ...editingUser,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email
      });

      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      setEditingUser(null);
      setNewUser({ name: '', username: '', email: '' });
    } catch (err) {
      setError("Kullanıcı güncellenirken bir hata oluştu.");
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewUser({ name: '', username: '', email: '' });
  };

  if (loading) {
    return <div className={styles.container}>Yükleniyor...</div>;
  }

  if (error) {
    return <div className={styles.container}>Hata: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Kullanıcılar</h1>
      
      {/* Kullanıcı Ekleme/Güncelleme Formu */}
      <div className={styles.formContainer}>
        <h2>{editingUser ? "Kullanıcıyı Güncelle" : "Yeni Kullanıcı Ekle"}</h2>
        <input 
          type="text" 
          placeholder="İsim" 
          value={newUser.name} 
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Kullanıcı Adı" 
          value={newUser.username} 
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input 
          type="email" 
          placeholder="E-posta" 
          value={newUser.email} 
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {editingUser ? (
          <>
            <button className={styles.updateButton} onClick={handleUpdateUser}>Güncelle</button>
            <button className={styles.cancelButton} onClick={handleCancelEdit}>İptal</button>
          </>
        ) : (
          <button className={styles.addButton} onClick={handleCreateUser}>Ekle</button>
        )}
      </div>

      {/* Kullanıcı Listesi */}
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Kullanıcı Adı</th>
            <th>E-posta</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <div className={styles['action-buttons']}>
                  <button className={styles.editButton} onClick={() => handleEditUser(user)}>Düzenle</button>
                  <button className={styles.deleteButton} onClick={() => handleDeleteUser(user.id)}>Sil</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;