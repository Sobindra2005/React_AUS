
import { useState } from "react";

export const MultiStepForm = () => {
    // TODO 1: Create a state to track the current step.
    // Hint: The initial step should be 1.

    // TODO 2: Create an object state to store all form fields.
    // Fields: name, email, phone, country, city,
    // address, username, password.
    // Hint: Initialize each field with an empty string.

    const steps = ["Personal", "Address", "Account"];

    const inputClass =
        "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    const handleChange = (e) => {
        // TODO 3: Update the corresponding form field.
        // Hint: Extract name and value from e.target.
        // Use the spread operator and computed property name.
    };

    const handleNext = () => {
        // TODO 4: Move to the next step.
        // Hint: Update state based on its previous value.
        // Make sure the step does not exceed 3.
    };

    const handleBack = () => {
        // TODO 5: Move to the previous step.
        // Make sure the step does not go below 1.
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO 6: Submit the complete form data.
        // Hint: Display the submitted data using console.log.
        // Do not log the actual password.

        // TODO 7: Reset the form and return to step 1.
    };

    const renderStep = () => {
        // TODO 8: Replace 1 with the current step state.

        switch (1) {
            case 1:
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Personal Information
                        </h2>

                        {/* TODO: Connect every input with
                its state value and handleChange. */}

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                className={inputClass}
                            />
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Address Information
                        </h2>

                        {/* TODO: Make these controlled inputs. */}

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Country
                            </label>
                            <select name="country" className={inputClass}>
                                <option value="">Select country</option>
                                <option value="Nepal">Nepal</option>
                                <option value="India">India</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter your city"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Address
                            </label>
                            <textarea
                                name="address"
                                placeholder="Enter your address"
                                rows={3}
                                className={inputClass}
                            />
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Account Information
                        </h2>

                        {/* TODO: Make these controlled inputs. */}

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                className={inputClass}
                            />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-900">
                    Create your account
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Complete the following steps to register.
                </p>

                {/* Step indicator */}
                <div className="my-8 flex items-center justify-between">
                    {steps.map((label, index) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-2"
                        >
                            {/* TODO 9: Highlight the current and
                  completed steps using conditional classes. */}

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                                {index + 1}
                            </div>

                            <span className="text-xs font-medium text-gray-500">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="border-t border-gray-200 pt-6">
                        {renderStep()}
                    </div>

                    {/* Navigation buttons */}
                    <div className="mt-8 flex items-center justify-between">
                        {/* TODO 10: Disable the Back button
                when the current step is 1. */}

                        <button
                            type="button"
                            onClick={handleBack}
                            className="rounded-lg border border-gray-300 px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Back
                        </button>

                        {/* TODO 11: Show Next on steps 1 and 2.
                Show Submit only on step 3.
                Hint: Use conditional rendering. */}

                        <button
                            type="button"
                            onClick={handleNext}
                            className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700"
                        >
                            Next
                        </button>

                        {/* TODO: Create a Submit button with type="submit"
                using the same styling. */}
                    </div>
                </form>

                {/* TODO 12: Display the current step dynamically. */}
                <p className="mt-6 text-center text-sm text-gray-400">
                    Step 1 of 3
                </p>
            </div>
        </div>
    );
};

export default MultiStepForm;
