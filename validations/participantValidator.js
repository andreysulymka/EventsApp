import { body } from 'express-validator';

const participantValidator = [
    body('fullName', 'Повинно бути мінімум 3 символи').isLength({ min: 3 }),
    body('email', 'Невірний формат пошти').isEmail(),
    body('birthDay', 'Повинно бути мін 6 символів').isLength({ min: 6 }),
    body('foundThrow').isIn(['Social media', 'Friends', 'Found myself']),
];

export default participantValidator;
