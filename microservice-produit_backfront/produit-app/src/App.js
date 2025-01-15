import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { Layout, message } from 'antd';
import './App.css';

// Importer l'image depuis le dossier src
import banner from './assets/images/banner.jpg';

const { Content } = Layout;

function App() {
    const [produits, setProduits] = useState([]);
    const [currentProduit, setCurrentProduit] = useState(null);

    useEffect(() => {
        fetchProduits();
    }, []);

    const fetchProduits = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/produits');
            setProduits(response.data);
        } catch (error) {
            message.error('Erreur lors de la récupération des produits.');
        }
    };

    const addOrUpdateProduit = async (produit) => {
        try {
            if (currentProduit) {
                await axios.put(`http://localhost:8081/api/produits/${currentProduit.id}`, produit);
                message.success('Produit mis à jour avec succès.');
            } else {
                await axios.post('http://localhost:8081/api/produits', produit);
                message.success('Produit ajouté avec succès.');
            }
            fetchProduits();
            setCurrentProduit(null);
        } catch (error) {
            message.error('Erreur lors de l\'ajout ou de la mise à jour du produit.');
        }
    };

    const deleteProduit = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/produits/${id}`);
            message.success('Produit supprimé avec succès.');
            fetchProduits();
        } catch (error) {
            message.error('Erreur lors de la suppression du produit.');
        }
    };

    return (
        <Layout>
            <Content
                style={{
                    padding: '24px',
                    background: "white", // Utilisation de l'image importée
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                <ProductForm
                    onSubmit={addOrUpdateProduit}
                    initialValues={currentProduit}
                    isEditing={!!currentProduit}
                    onCancel={() => setCurrentProduit(null)}
                />
                <ProductList
                    produits={produits}
                    onEdit={setCurrentProduit}
                    onDelete={deleteProduit}
                />
            </Content>
        </Layout>
    );
}

export default App;
