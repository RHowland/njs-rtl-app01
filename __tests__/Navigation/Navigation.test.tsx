import React from 'react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fireEvent, render, screen } from '@testing-library/react';

const testCommonLinks = () => {
	it('should have an about us link', () => {
		const aboutUs = screen.getByRole('link', { name: /about us/i });
		expect(aboutUs).toBeInTheDocument();
	});

	it('should have a services link', () => {
		const services = screen.getByRole('link', { name: /services/i });
		expect(services).toBeInTheDocument();
	});

	it('should have a contact link', () => {
		const contact = screen.getByRole('link', { name: /contact/i });
		expect(contact).toBeInTheDocument();
	});

	it('navigates to the About Us page when the About Us link is clicked', () => {
		const aboutLink = screen.getByRole('link', { name: /about us/i });
		fireEvent.click(aboutLink);
		expect(aboutLink.closest('a')).toHaveAttribute('href', '/AboutPage');
	});

	it('navigates to the Services page when the Services link is clicked', () => {
		const servicesLink = screen.getByRole('link', { name: /services/i });
		fireEvent.click(servicesLink);
		expect(servicesLink.closest('a')).toHaveAttribute('href', '/ServicesPage');
	});

	it('navigates to the Contact page when the Contact link is clicked', () => {
		const contactLink = screen.getByRole('link', { name: /contact/i });
		fireEvent.click(contactLink);
		expect(contactLink.closest('a')).toHaveAttribute('href', '/ContactPage');
	});
};

describe('Navbar', () => {
	beforeEach(() => {
		render(<Navbar />);
	});

	it('should have a logo', () => {
		const logo = screen.getByRole('img');
		expect(logo).toBeInTheDocument();
	});

	testCommonLinks();
});

describe('Footer', () => {
	beforeEach(() => {
		render(<Footer />);
	});

	it('should have 5 logos', () => {
		const logo = screen.getAllByRole('img');
		expect(logo).toHaveLength(5);
	});

	testCommonLinks();
});
