export const responses = {
	accessDeniedOwner: 'Тільки власник може змінювати або видаляти запис',
	unauthorized: {
		accessDenied: 'Доступ заборонено. Потрібна авторизація.',
		invalidOrExpiredToken: 'Невірний або термін дії токена сплив.',
	},
	success: {
		userCreated: 'Користувача успішно створено.',
		userUpdated: 'Дані користувача успішно оновлені.',
		codeSent: 'Код підтвердження надіслано на вашу електронну пошту.',
		hallCreated: 'Зал успішно створено.',
		hallUpdated: 'Дані залу успішно оновлені.',
		hallDeleted: 'Зал успішно видалено.',
		visitTracked: 'Візит успішно відстежено.',
		subscriptionRenewed: 'Підписку успішно оновлено.',
	},
	error: {
		hallCannotBeDeletedHall:
			'Неможливо видалити зал, оскільки він використовується в',
		hallCannotBeDeletedSection:
			'Неможливо видалити секцію, оскільки вона використовується у дуяких',
		hallCannotBeDeletedSubscription:
			'Неможливо видалити абонемент, оскільки він використовується у дуяких',
		invalidEmail: 'Невірна адреса електронної пошти.',
		invalidCode: 'Невірний код підтвердження.',
		codeExpired: 'Термін дії коду підтвердження минув.',
		invalidExpiredCode:
			'Невірний код підтвердження або термін дії коду підтвердження минув',
		userNotFound: 'Користувача з такою електронною поштою не знайдено.',
		userExists: 'Користувач з такою електронною поштою вже існує.',
		hallNotFound: 'Зал не знайдено.',
		expenseNotFound: 'Витрати не знайдено.',
		hallNameUnique: 'Назва залу повинна бути унікальною',
		sectionNameUnique: 'Назва секції повинна бути унікальною',
		subscriptionNameUnique: 'Назва абонементу повинна бути унікальною',
		hallNotAuthorized: 'У вас немає прав для редагування цього залу.',
		internalError: 'Виникла помилка на сервері. Спробуйте ще раз.',
		errorImageNotProvided: 'Зображення не надано',
		imageUploadFailed: 'Не вдалося завантажити зображення',
		queryIsRequired: "Параметр запиту обов'язковим",
		sectionsIdsIsRequired: "Обов'язкові ідентифікатори розділів",
		sectionNotFound: 'Одну або кілька секцій не знайдено',
		subscriptionNotFound: 'Підписку не знайдено',
		memberNotFound: 'Учасника не знайдено',
		memberSubscriptionsNotFound: 'Членство не знайдено',
		sectionNotBelongHall: 'Деякі зали не належать поточному користувачеві',
		noIdsProvidedForDeletion: 'Не надано ідентифікатори для видалення',
		uniqueIdIsRequired: "Унікальний код є обов'язковим",
		noAccessToSection: 'У вас немає доступу до цієї секції',
		noAccessToMember: 'У вас немає доступу до цього відвідувача',
		noActiveSubscriptions: 'Немає активних абонементів для цього відвідувача',
		noRemainingSessions:
			'У цього абонемента більше немає доступних відвідувань',
	},
	validation: {
		emailRequired: 'Поле "Електронна пошта" є обов\'язковим.',
		codeRequired: 'Поле "Код підтвердження" є обов\'язковим.',
		hallNameRequired: 'Поле "Назва залу" є обов\'язковим.',
		hallNameLength: 'Назва залу повинна бути від 3 до 255 символів.',
		codeLength: 'Код підтвердження повинен містити рівно 8 символів.',
		verificationCodeRequired: "Код підтвердження є обов'язковим.",
		hallNameMin: 'Назва залу повинна бути не менше 3 символів.',
		hallNameMax: 'Назва залу повинна бути не більше 255 символів.',
		sectionNameMin: 'Назва секції повинна бути не менше 3 символів.',
		sectionNameMax: 'Назва секції повинна бути не більше 255 символів.',
		sectionNameRequired: 'Поле "Назва секції" є обов\'язковим.',
		sectionDescriptionMax: 'Опис не повинен перевищувати 1000 символів.',
		sectionHallIdsArray: 'Поле "hallIds" повинно бути масивом.',
		sectionHallIdsItems: 'Елементи масиву повинні бути числами.',
		subscriptionNameMin: 'Назва підписки повинна бути не менше 3 символів.',
		subscriptionNameMax: 'Назва підписки повинна бути не більше 255 символів.',
		subscriptionNameRequired: 'Поле "Назва підписки" є обов\'язковим.',
		subscriptionNumberOfSessionsInteger:
			'Кількість сесій повинна бути цілим числом.',
		subscriptionNumberOfSessionsMin:
			'Кількість сесій повинна бути більше або дорівнювати 1.',
		subscriptionNumberOfSessionsRequired:
			'Поле "Кількість сесій" є обов\'язковим.',
		subscriptionPriceNumber: 'Ціна повинна бути числом.',
		subscriptionPricePrecision:
			'Ціна повинна мати не більше 2 знаків після коми.',
		subscriptionPricePositive: 'Ціна повинна бути більшою за нуль.',
		subscriptionPriceRequired: 'Поле "Ціна" є обов\'язковим.',
		subscriptionSectionIdsArray: 'Поле "sectionIds" повинно бути масивом.',
		subscriptionSectionIdsItems: 'sectionIds повинен бути числом.',
		memberFirstNameMin: "Ім'я повинно бути не менше 2 символів.",
		memberFirstNameMax: "Ім'я повинно бути не більше 255 символів.",
		memberFirstNameRequired: 'Поле "Ім\'я" є обов\'язковим.',
		memberLastNameMin: 'Призвище повинно бути не менше 2 символів.',
		memberLastNameMax: 'Призвище повинно бути не більше 255 символів.',
		memberLastNameRequired: 'Поле "Призвище" є обов\'язковим.',
		memberPhoneRequired: 'Учасник із таким номером телефону вже існує',
		memberEmailRequired: 'Учасник із таким email адресою  вже існує',
		memberAgeMin: 'Вік повинен бути не менше 18 років.',
		memberAgeMax: 'Вік повинен бути не більше 100 років.',
		memberAgeRequired: 'Поле "Вік" є обов\'язковим.',
		memberHallIdRequired: 'Поле "hallId" є обов\'язковим.',
		memberHallIdNumber: 'Поле "hallId" повинно бути числом.',
		memberSectionsArray: 'Поле "sections" повинно бути масивом.',
		memberSectionsItems: "Елементи масиву повинні бути об'єктами.",
		memberSectionIdNumber: 'Поле "sectionId" повинно бути числом.',
		memberSectionIdRequired: 'Поле "sectionId" є обов\'язковим.',
		memberSubscriptionIdNumber: 'Поле "subscriptionId" повинно бути числом.',
		memberSubscriptionIdRequired: 'Поле "subscriptionId" є обов\'язковим.',
		trackVisitMemberIdNumber: 'Поле "memberId" повинно бути числом.',
		trackVisitMemberIdRequired: 'Поле "memberId" є обов\'язковим.',
		trackVisitSectionIdNumber: 'Поле "sectionId" повинно бути числом.',
		trackVisitSectionIdRequired: 'Поле "sectionId" є обов\'язковим.',
		renewSubscriptionMemberIdNumber: 'Поле "memberId" повинно бути числом.',
		renewSubscriptionMemberIdRequired: 'Поле "memberId" є обов\'язковим.',
		renewSubscriptionSectionIdNumber: 'Поле "sectionId" повинно бути числом.',
		renewSubscriptionSectionIdRequired: 'Поле "sectionId" є обов\'язковим.',
		renewSubscriptionSubscriptionIdNumber:
			'Поле "subscriptionId" повинно бути числом.',
		renewSubscriptionSubscriptionIdRequired:
			'Поле "subscriptionId" є обов\'язковим.',
		trainerIdInvalid: 'Невірний ID тренера.',
		trainerFirstNameMin: "Ім'я тренера повинно бути не менше 2 символів.",
		trainerFirstNameMax: "Ім'я тренера повинно бути не більше 255 символів.",
		trainerFirstNameRequired: 'Поле "Ім\'я тренера" є обов\'язковим.',
		trainerLastNameMin: 'Призвище тренера повинно бути не менше 2 символів.',
		trainerLastNameMax: 'Призвище тренера повинно бути не більше 255 символів.',
		trainerLastNameRequired: 'Поле "Призвище тренера" є обов\'язковим.',
		trainerAgeMin: 'Вік тренера повинен бути не менше 18 років.',
		trainerAgeMax: 'Вік тренера повинен бути не більше 100 років.',
		trainerDateOfBirthRequired: "Дата народження є обов'язковою.",
		trainerPhoneInvalid: 'Невірний номер телефону тренера.',
		trainerPhoneRequired: 'Поле "Телефон тренера" є обов\'язковим.',
		trainerPhoneUnique: 'Телефон тренера вже використовується.',
		trainerNotFound: 'Тренера з таким ID не знайдено.',
	},
}
