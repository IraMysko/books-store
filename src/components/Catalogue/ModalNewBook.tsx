import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, InputNumber, Button, Modal } from 'antd';

import { addBook } from '../../redux/books/actions';
import './catalogue.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string  */
const validateMessages = {
    required: '${label} is required!',
    types: {
        name: '${label} is not a valid name!',
        number: '${label} is not a valid number!',
        price: '${label} is not a valid'
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

interface Props {
    visible: boolean;
    onOk: VoidFunction;
    onCancel: VoidFunction;
}

const ModalNewBook: React.FC<Props> = ({ visible, onOk, onCancel }) => {
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        dispatch(
            addBook({
                author: values.author,
                name: values.name,
                price: values.price,
                imgUrl: values.imgUrl,
            }));
        onOk();
    };

    return (
        <Modal title="Add new book"
            visible={visible}
            onCancel={onCancel}
            footer={[]}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name='author'
                    label="Who is author"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='name'
                    label="Name of this book"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='imgUrl'
                    label="Paste URL adress"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='price'
                    label="Price"
                    rules={[{ type: 'number', min: 0, max: 99 }, { required: true }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={onCancel}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default React.memo(ModalNewBook);