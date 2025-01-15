import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => (
    <AntdHeader
        style={{
            background: 'linear-gradient(90deg, #0050b3, #1890ff)', // Dégradé dynamique pour le fond
            padding: '50px 20px', // Augmenter le padding pour agrandir le header
            display: 'flex',
            justifyContent: 'center', // Centrer le contenu horizontalement
            alignItems: 'center', // Centrer le contenu verticalement
            color: '#fff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Ombre plus marquée
            transition: 'all 0.3s ease', // Transition fluide pour l'ombre
        }}
    >
        <Row justify="center" align="middle" style={{ width: '100%' }}>
            <Col span={24} style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '15px' }}>
                    <BookOutlined
                        style={{
                            fontSize: '40px',
                            marginRight: '15px',
                            color: '#fff',
                            transform: 'scale(1.2)',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.3) rotate(15deg)';
                            e.currentTarget.style.color = '#ffcc00'; // Changer la couleur lors du survol
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1.2) rotate(0deg)';
                            e.currentTarget.style.color = '#fff'; // Revenir à la couleur initiale
                        }}
                    />
                    <Title
                        level={2}
                        style={{
                            margin: 0,
                            color: '#fff',
                            fontWeight: 700,
                            letterSpacing: '2px', // Espacement entre les lettres
                            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)', // Ombre pour le texte
                        }}
                    >
                        Bibliothèque en ligne
                    </Title>
                </div>
                <span
                    style={{
                        fontSize: '18px',
                        color: '#d1e9ff',
                        fontStyle: 'italic',
                        letterSpacing: '1px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Ombre légère pour le texte
                    }}
                >
                    Explorez et gérez vos livres et ressources en toute simplicité
                </span>
            </Col>
        </Row>
    </AntdHeader>
);

export default Header;
