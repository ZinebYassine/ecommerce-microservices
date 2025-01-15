import React from 'react';
import { Form, Input, InputNumber, Button, Card, Space } from 'antd';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';

const ProductForm = ({ onSubmit, initialValues, isEditing, onCancel }) => {
    const [form] = Form.useForm();

    // Pré-remplir le formulaire lors de l'édition
    React.useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [initialValues, form]);

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Card
            title={isEditing ? 'Modifier le produit' : 'Ajouter un produit'}
            bordered={false}
            style={{
                maxWidth: 800,
                margin: '40px auto',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
            }}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={initialValues}
                style={{ padding: '20px' }}
            >
                <Form.Item
                    name="description"
                    label={<span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Titre</span>}
                    rules={[{ required: true, message: 'Veuillez entrer un titre' }]}
                >
                    <Input placeholder="Description du produit" allowClear style={{ padding: '10px', borderRadius: '8px' }} />
                </Form.Item>

                <Form.Item
                    name="quantite"
                    label={<span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Quantité disponible</span>}
                    rules={[{ required: true, message: 'Veuillez entrer une quantité' }]}
                >
                    <InputNumber min={1} placeholder="Quantité" style={{ width: '100%', padding: '10px', borderRadius: '8px' }} />
                </Form.Item>

                <Form.Item
                    name="prix"
                    label={<span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Prix du produit</span>}
                    rules={[{ required: true, message: 'Veuillez entrer un prix' }]}
                >
                    <InputNumber
                        min={0}
                        step={0.01}
                        placeholder="Prix"
                        style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
                    />
                </Form.Item>

                <Form.Item>
                    <Space style={{ justifyContent: 'center', width: '100%' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SaveOutlined />}
                            style={{
                                background: 'linear-gradient(90deg, #1e90ff, #00bfff)',
                                borderColor: '#00bfff',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                fontSize: '16px'
                            }}
                        >
                            {isEditing ? 'Mettre à jour' : 'Ajouter'}
                        </Button>
                        {isEditing && (
                            <Button
                                onClick={onCancel}
                                icon={<CloseOutlined />}
                                style={{
                                    background: 'linear-gradient(90deg, #ff4d4f, #ff6f61)',
                                    borderColor: '#ff4d4f',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    padding: '10px 20px',
                                    fontSize: '16px'
                                }}
                            >
                                Annuler
                            </Button>
                        )}
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ProductForm;
