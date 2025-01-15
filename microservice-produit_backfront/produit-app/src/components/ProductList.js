import React from 'react';
import { Card, Button, Row, Col, Tooltip, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ProductList = ({ produits, onEdit, onDelete }) => (
    <Row gutter={[24, 24]} style={{ marginTop: '40px', padding: '0 20px' }}>
        {produits.map((produit) => (
            <Col xs={24} sm={12} md={12} lg={12} key={produit.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                    hoverable
                    title={
                        <div style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color: '#1E3A8A',
                        }}>
                            {produit.description}
                        </div>
                    }
                    extra={
                        <Tooltip title="Prix total">
                            <span style={{
                                fontWeight: 'bold',
                                color: '#10B981',
                                fontSize: '18px',
                            }}>
                                {produit.prix} DH
                            </span>
                        </Tooltip>
                    }
                    actions={[
                        <Tooltip title="Éditer le produit">
                            <Button
                                type="ghost"
                                icon={<EditOutlined style={{ color: '#3B82F6' }} />}
                                onClick={() => onEdit(produit)}
                                style={{ borderRadius: '50%' }}
                            />
                        </Tooltip>,
                        <Tooltip title="Supprimer le produit">
                            <Popconfirm
                                title="Êtes-vous sûr de vouloir supprimer ce produit ?"
                                onConfirm={() => onDelete(produit.id)}
                                okText="Oui"
                                cancelText="Non"
                                placement="topRight"
                            >
                                <Button
                                    type="ghost"
                                    danger
                                    icon={<DeleteOutlined style={{ color: '#EF4444' }} />}
                                    style={{ borderRadius: '50%' }}
                                />
                            </Popconfirm>
                        </Tooltip>,
                    ]}
                    style={{
                        width: '90%',
                        borderRadius: '15px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        overflow: 'hidden',
                        backgroundImage: 'linear-gradient(135deg, #ffffff, #F9FAFB)',
                        border: 'none',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                    }}
                >
                    <div
                        style={{
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: '#F3F4F6',
                            borderRadius: '10px',
                        }}
                    >
                        <p style={{ marginBottom: '10px', fontSize: '16px', color: '#374151' }}>
                            <strong>Quantité:</strong> {produit.quantite}
                        </p>
                    </div>
                </Card>
            </Col>
        ))}
    </Row>
);

export default ProductList;
