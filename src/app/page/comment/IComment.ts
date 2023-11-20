
import { FormGroup } from "@angular/forms";
export interface IComment 
{
    visible: boolean;

    commentForm:FormGroup;

    onSubmit();
    onDelete();
    onEdit();
    onConfirm();
    onReject();
    showConfirm();
}
