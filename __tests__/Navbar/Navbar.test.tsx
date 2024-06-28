import React from 'react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Navbar', () => {
	it('should have a logo', () => {
		render(<Navbar />);
		const logo = screen.getByRole('img');
		expect(logo).toBeInTheDocument();
	});

	it('should have an about us link', () => {
		render(<Navbar />);
		const aboutUs = screen.getByRole('link', { name: /about us/i });
		expect(aboutUs).toBeInTheDocument();
	});

	it('should have a services link', () => {
		render(<Navbar />);
		const services = screen.getByRole('link', { name: /services/i });
		expect(services).toBeInTheDocument();
	});

	it('should have a contact link', () => {
		render(<Navbar />);
		const contact = screen.getByRole('link', { name: /contact/i });
		expect(contact).toBeInTheDocument();
	});

	it('navigates to the About Us page when the About Us link is clicked', () => {
		render(<Navbar />);

		const aboutLink = screen.getByRole('link', { name: /about us/i });
		fireEvent.click(aboutLink);
		expect(aboutLink.closest('a')).toHaveAttribute('href', '/AboutPage');
	});

	it('navigates to the Services page when the Services link is clicked', () => {
		render(<Navbar />);

		const servicesLink = screen.getByRole('link', { name: /services/i });
		fireEvent.click(servicesLink);
		expect(servicesLink.closest('a')).toHaveAttribute('href', '/ServicesPage');
	});

	it('navigates to the Contact page when the Contact link is clicked', () => {
		render(<Navbar />);

		const contactLink = screen.getByRole('link', { name: /contact/i });
		fireEvent.click(contactLink);
		expect(contactLink.closest('a')).toHaveAttribute('href', '/ContactPage');
	});
});
