import { FC } from "react";

import Modal from "@/ui/modal";
import { ICreateTaskProps } from "@/features/create-task/model/create-task.type";
import TaskForm from "@/components/task-form";
import { ITaskFormData } from "@/components/task-form/model/task-form.type";
import ModalTitle from "@/ui/modal/components/modal-title";

const CreateTask: FC<ICreateTaskProps> = ({ isOpen, handleToggle }) => {
    const handleSubmit = (data: ITaskFormData) => {
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} handleToggle={handleToggle}>
            <ModalTitle>New task</ModalTitle>
            <TaskForm handleSubmit={handleSubmit} />
        </Modal>
    )
}

export default CreateTask;