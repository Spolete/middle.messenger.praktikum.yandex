export default function validateInput(type: string, data: string): boolean {
    let pattern;
    switch (type) {
        case 'first_name':
            pattern = /^[A-Z, А-Я][A-Z,a-z,а-я,А-Я,-,_]+$/
            break;
        case 'second_name':
            pattern = /^[A-Z, А-Я][A-Z,a-z,а-я,А-Я,-,_]+$/
            break;

        case 'email':
            pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z-]*[a-z])?\.)+[a-z](?:[a-z-]*[a-z])?$/
            break;

        case 'phone':
            pattern = /^[0-9+]{10,15}$/;
            break;

        case 'password':
            pattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
            break;

        case 'password2':
            pattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
            break;

        case 'login':
            pattern = /^[+a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
            break;

        default:
            return false
    }

    return pattern.test(data);
}
