import { FormGroup } from '@angular/forms';

/**
 * @param group Form Group
 */
export function PasswordMatcher(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordConfirm.value;
    if (pass === confirmPass) {
        if (group.controls.passwordConfirm.value) {
            group.controls.passwordConfirm.setErrors(null);
        }
        return null;
    } else {
        group.controls.passwordConfirm.setErrors({ notSame: true });
        return { notSame: true };
    }

}
