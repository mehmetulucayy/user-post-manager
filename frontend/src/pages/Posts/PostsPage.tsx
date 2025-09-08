import { useEffect, useState } from "react";
import { fetchPosts, createPost, updatePost, deletePost } from "@/features/posts/posts.service";
import { Post } from "@/features/posts/posts.types";
import styles from "./PostsPage.module.css";

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState({ userId: 1, title: '', body: '' }); // PDF'e göre userId zorunlu
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const postsData = await fetchPosts();
      setPosts(postsData);
    } catch (err) {
      setError("Gönderiler yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async () => {
    if (!newPost.title || !newPost.body) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      const createdPost = await createPost({ ...newPost, id: posts.length + 1 });
      setPosts([...posts, createdPost]);
      setNewPost({ userId: 1, title: '', body: '' });
    } catch (err) {
      setError("Gönderi oluşturulurken bir hata oluştu.");
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      setError("Gönderi silinirken bir hata oluştu.");
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setNewPost({ userId: post.userId, title: post.title, body: post.body });
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;
    try {
      const updatedPost = await updatePost({
        ...editingPost,
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId
      });

      setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
      setEditingPost(null);
      setNewPost({ userId: 1, title: '', body: '' });
    } catch (err) {
      setError("Gönderi güncellenirken bir hata oluştu.");
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setNewPost({ userId: 1, title: '', body: '' });
  };

  if (loading) {
    return <div className={styles.container}>Yükleniyor...</div>;
  }

  if (error) {
    return <div className={styles.container}>Hata: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Gönderiler</h1>
      
      {/* Gönderi Ekleme/Güncelleme Formu */}
      <div className={styles.formContainer}>
        <h2>{editingPost ? "Gönderiyi Güncelle" : "Yeni Gönderi Ekle"}</h2>
        <input 
          type="number" 
          placeholder="Kullanıcı ID" 
          value={newPost.userId} 
          onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
        />
        <input 
          type="text" 
          placeholder="Başlık" 
          value={newPost.title} 
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea 
          placeholder="İçerik" 
          value={newPost.body} 
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        {editingPost ? (
          <>
            <button className={styles.updateButton} onClick={handleUpdatePost}>Güncelle</button>
            <button className={styles.cancelButton} onClick={handleCancelEdit}>İptal</button>
          </>
        ) : (
          <button className={styles.addButton} onClick={handleCreatePost}>Ekle</button>
        )}
      </div>

      {/* Gönderi Listesi */}
      <table className={styles.postsTable}>
        <thead>
          <tr>
            <th>Kullanıcı ID</th>
            <th>Gönderi ID</th>
            <th>Başlık</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <div className={styles["action-buttons"]}>
                  <button className={styles.editButton} onClick={() => handleEditPost(post)}>Düzenle</button>
                  <button className={styles.deleteButton} onClick={() => handleDeletePost(post.id)}>Sil</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsPage;