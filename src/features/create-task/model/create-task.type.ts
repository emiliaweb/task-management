import { ITaskFormProps } from "@/components/task-form/resources/task-form.model";
import { IModalProps } from "@/ui/modal/model/modal.type";

export interface ICreateTaskProps {
    isOpen: IModalProps['isOpen'];
    handleToggle: IModalProps['handleToggle'];
    defaultValues?: Partial<ITaskFormProps['defaultValues']>;
}