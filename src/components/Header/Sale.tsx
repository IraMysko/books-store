import React from 'react';
import { Modal } from 'antd';

interface Props {
    visible: boolean;
    onOk: VoidFunction;
    onCancel: VoidFunction;
}

const Sale: React.FC<Props> = ({ visible, onOk, onCancel }) => {
    return (
        <Modal title="Basic Modal" visible={visible} onOk={onOk} onCancel={onCancel}>
            this modal is developing...
        </Modal>
    )
};

export default React.memo(Sale);