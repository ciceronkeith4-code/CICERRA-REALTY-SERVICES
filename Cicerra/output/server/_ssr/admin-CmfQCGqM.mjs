import { a as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as PenLine, _ as Eye, a as Search, k as ArrowLeft, m as Lock, o as Save, r as Trash2, s as Plus, v as EyeOff } from "../_libs/lucide-react.mjs";
import { n as saveStoredProperties, t as getStoredProperties } from "./properties-Dz2ZM7E5.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CmfQCGqM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_IMAGES = [
	{
		value: "/src/assets/property-1.jpg",
		label: "Modern Residence (Property 1)"
	},
	{
		value: "/src/assets/property-2.jpg",
		label: "Cozy House (Property 2)"
	},
	{
		value: "/src/assets/property-3.jpg",
		label: "Skyline Tower (Property 3)"
	},
	{
		value: "/src/assets/property-4.jpg",
		label: "Forest Estate (Property 4)"
	},
	{
		value: "/src/assets/property-5.jpg",
		label: "Beach Villa (Property 5)"
	},
	{
		value: "/src/assets/property-6.jpg",
		label: "Prestige Mansion (Property 6)"
	}
];
function AdminPage() {
	useNavigate();
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [allProps, setAllProps] = (0, import_react.useState)([]);
	const [editingProp, setEditingProp] = (0, import_react.useState)(null);
	const [isAddMode, setIsAddMode] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [formData, setFormData] = (0, import_react.useState)({
		id: "",
		name: "",
		image: "",
		customImage: "",
		location: "Dasmariñas, Cavite",
		price: "₱4,500,000",
		beds: "",
		baths: "",
		lot: "240 sqm",
		tag: "Rockwell Land",
		type: "Lot",
		category: "lot",
		details: ""
	});
	(0, import_react.useEffect)(() => {
		setAllProps(getStoredProperties());
		if (typeof window !== "undefined") {
			if (sessionStorage.getItem("cicerra_admin_auth") === "true") setIsAuthenticated(true);
		}
	}, []);
	const handleLogin = (e) => {
		e.preventDefault();
		if (password === "cicerraadmin" || password === "admin123") {
			setIsAuthenticated(true);
			sessionStorage.setItem("cicerra_admin_auth", "true");
			if (typeof window !== "undefined") window.dispatchEvent(new Event("cicerra_auth_change"));
			toast.success("Access granted. Welcome back, Ryan!");
		} else toast.error("Incorrect administrator password.");
	};
	const openAddForm = () => {
		setIsAddMode(true);
		setEditingProp(null);
		setFormData({
			id: "prop-" + Date.now(),
			name: "",
			image: "",
			customImage: "",
			location: "Dasmariñas, Cavite",
			price: "₱5,000,000",
			beds: "",
			baths: "",
			lot: "250 sqm",
			tag: "Rockwell Land",
			type: "Lot",
			category: "lot",
			details: ""
		});
	};
	const openEditForm = (prop) => {
		setIsAddMode(false);
		setEditingProp(prop);
		const isMock = prop.image ? MOCK_IMAGES.some((img) => img.value === prop.image) : false;
		setFormData({
			id: prop.id,
			name: prop.name,
			image: isMock ? prop.image || "" : "",
			customImage: isMock ? "" : prop.image || "",
			location: prop.location,
			price: prop.price,
			beds: prop.beds !== void 0 ? String(prop.beds) : "",
			baths: prop.baths !== void 0 ? String(prop.baths) : "",
			lot: prop.lot,
			tag: prop.tag,
			type: prop.type,
			category: prop.category || "lot",
			details: prop.details || ""
		});
	};
	const handleDelete = (id) => {
		if (confirm("Are you sure you want to delete this listing?")) {
			if (confirm("Warning: This action is permanent and cannot be undone. Are you absolutely sure you want to delete this property?")) {
				const updated = allProps.filter((p) => p.id !== id);
				setAllProps(updated);
				saveStoredProperties(updated);
				toast.success("Listing deleted successfully!");
			}
		}
	};
	const handleFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			if (file.size > 2.5 * 1024 * 1024) {
				toast.error("Image file size is too large (limit is 2.5MB).");
				return;
			}
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result;
				setFormData((prev) => ({
					...prev,
					customImage: base64String
				}));
				toast.success("Image selected successfully from your computer!");
			};
			reader.readAsDataURL(file);
		}
	};
	const handleSave = (e) => {
		e.preventDefault();
		if (!formData.name.trim()) {
			toast.error("Please enter a property name.");
			return;
		}
		if (!confirm("Are you sure you want to save this listing?")) return;
		if (!confirm("Please verify: Are you absolutely sure all details are correct and ready to be published?")) return;
		const finalImage = formData.customImage.trim() || formData.image || void 0;
		const propertyPayload = {
			id: formData.id,
			name: formData.name,
			image: finalImage,
			location: formData.location,
			price: formData.price,
			lot: formData.lot,
			tag: formData.tag,
			type: formData.type,
			category: formData.category,
			beds: formData.beds ? Number(formData.beds) : void 0,
			baths: formData.baths ? Number(formData.baths) : void 0,
			details: formData.details.trim() || void 0
		};
		let updated = [];
		if (isAddMode) {
			updated = [...allProps, propertyPayload];
			toast.success("Listing added successfully!");
		} else {
			updated = allProps.map((p) => p.id === formData.id ? propertyPayload : p);
			toast.success("Listing updated successfully!");
		}
		setAllProps(updated);
		saveStoredProperties(updated);
		setEditingProp(null);
		setIsAddMode(false);
	};
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#051C3F] px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-white",
					children: "Cicerra Portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-white/60 tracking-wide uppercase",
					children: "ADMINISTRATION PANEL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "mt-8 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: showPassword ? "text" : "password",
							placeholder: "Enter Admin Password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-5 pr-12 text-sm text-white placeholder-white/30 outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowPassword(!showPassword),
							className: "absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white",
							children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-6 w-full rounded-2xl bg-gold py-4 text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/15",
						children: "Sign In"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-2xs text-white/30",
					children: [
						"Authorized brokers and admin personnel only.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Tip: Use default pass ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "text-gold font-bold",
							children: "admin123"
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#FAF9F6] text-primary pt-32 pb-20 dark:bg-neutral-950 dark:text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rail",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-neutral-200/60 pb-8 mb-10 dark:border-neutral-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-gold font-bold mb-2",
							children: "Cicerra Realty Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl sm:text-5xl",
							children: "Listing Manager"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Real-time client catalog and dynamic search filter administration."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openAddForm,
							className: "inline-flex items-center gap-2 rounded-full bg-[#1B365D] dark:bg-gold text-white dark:text-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider shadow hover:scale-[1.02] active:scale-95 transition-all duration-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Property"]
						})
					})]
				}),
				(isAddMode || editingProp) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 rounded-3xl border border-gold/30 bg-[#FAF9F6] dark:bg-neutral-900/60 p-6 sm:p-8 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6 border-b border-neutral-200/60 dark:border-neutral-800 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-foreground m-0",
							children: isAddMode ? "New Property Listing" : `Edit: ${editingProp?.name}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setEditingProp(null);
								setIsAddMode(false);
							},
							className: "inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSave,
						className: "grid gap-6 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Property Title / Development Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. Orchard Residential Estate",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Location (must match search format)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. Dasmariñas, Cavite",
								value: formData.location,
								onChange: (e) => setFormData({
									...formData,
									location: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Price / Amortization Info"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. ₱4,800,000 or ₱18,000/month",
								value: formData.price,
								onChange: (e) => setFormData({
									...formData,
									price: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Sqm Size / Layout bounds"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. 240 sqm or 120 - 328 sqm",
								value: formData.lot,
								onChange: (e) => setFormData({
									...formData,
									lot: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Property Category Filter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.category,
								onChange: (e) => setFormData({
									...formData,
									category: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "lot",
										children: "Lots Only (lot)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "house",
										children: "House and Lot (house)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "condo",
										children: "Condominium (condo)"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Developer / Tag Label"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. Rockwell Land or Sta. Lucia Land",
								value: formData.tag,
								onChange: (e) => setFormData({
									...formData,
									tag: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Property Search Filter Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.type,
								onChange: (e) => setFormData({
									...formData,
									type: e.target.value
								}),
								className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Lot",
										children: "Lot Only (Lot)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "House and Lot",
										children: "House and Lot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Condominium",
										children: "Condominium"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Commercial Space",
										children: "Commercial Space"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Beds (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									placeholder: "None",
									value: formData.beds,
									onChange: (e) => setFormData({
										...formData,
										beds: e.target.value
									}),
									className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Baths (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									placeholder: "None",
									value: formData.baths,
									onChange: (e) => setFormData({
										...formData,
										baths: e.target.value
									}),
									className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-1 md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Listing Image"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-center gap-4 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 bg-white dark:bg-neutral-900/60 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-24 w-36 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex shrink-0 items-center justify-center select-none text-center",
										children: formData.customImage || formData.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: formData.customImage || formData.image,
											alt: "Listing Preview",
											className: "h-full w-full object-cover animate-fade-in"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] uppercase tracking-wider text-neutral-400 font-semibold px-4",
											children: "No Image Selected"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full text-center sm:text-left flex flex-wrap items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												id: "admin-image-upload",
												className: "hidden",
												onChange: handleFileChange
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "admin-image-upload",
												className: "inline-flex items-center gap-2 rounded-xl bg-gold/10 border border-gold/30 hover:bg-gold/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gold cursor-pointer transition active:scale-95",
												children: "Choose Image from Computer"
											}),
											(formData.customImage || formData.image) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setFormData({
													...formData,
													customImage: "",
													image: ""
												}),
												className: "inline-flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-red-500 transition active:scale-95 cursor-pointer",
												children: "Remove"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "w-full mt-2 text-[10px] text-muted-foreground",
												children: "Click the button to select an image from your computer, or click \"Remove Picture\" to post with no image."
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-1 md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Listing Details / Long Description (e.g. accreditation copy, marketing info)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 6,
									placeholder: "Paste longer details, marketing write-up, sta. lucia land partnership notifications, or contact information here...",
									value: formData.details,
									onChange: (e) => setFormData({
										...formData,
										details: e.target.value
									}),
									className: "w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-y"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-1 md:col-span-2 flex items-center justify-end gap-3 mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setEditingProp(null);
										setIsAddMode(false);
									},
									className: "rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-100 transition",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex items-center gap-2 rounded-full bg-gold text-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-gold-soft hover:scale-[1.02] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Save Listing"]
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search listings by title, location, developer, or type...",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-3.5 pl-12 pr-6 text-sm text-primary dark:text-white placeholder-neutral-400 outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 shadow-2xs"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:block rounded-3xl border border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-neutral-900/40 overflow-hidden shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left border-collapse table-fixed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-neutral-200/60 dark:border-neutral-800 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 bg-neutral-50/50 dark:bg-neutral-900/30",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 pl-8 pr-4 align-middle w-[8%]",
												children: "Image"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 px-4 align-middle w-[25%]",
												children: "Property / Dev Title"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 px-4 align-middle w-[18%]",
												children: "Location"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 px-4 align-middle w-[13%]",
												children: "Price"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 px-4 align-middle w-[10%]",
												children: "Type"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 px-4 align-middle w-[15%]",
												children: "Developer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-4 pl-4 pr-8 align-middle w-[11%] text-right",
												children: "Actions"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-neutral-200/40 dark:divide-neutral-800/40",
										children: allProps.filter((p) => {
											const q = searchQuery.toLowerCase().trim();
											if (!q) return true;
											return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
										}).map((prop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 pl-8 pr-4 align-middle",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-12 w-16 overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex shrink-0 items-center justify-center text-[8px] uppercase tracking-wider text-muted-foreground select-none",
														children: prop.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: prop.image,
															alt: prop.name,
															className: "h-full w-full object-cover"
														}) : "No Pic"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "py-4 px-4 align-middle",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-sm leading-tight text-primary dark:text-white truncate",
														title: prop.name,
														children: prop.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[10px] text-muted-foreground mt-1 tracking-wider uppercase font-semibold",
														children: ["ID: ", prop.id]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-4 align-middle text-sm text-neutral-600 dark:text-neutral-300 truncate",
													title: prop.location,
													children: prop.location
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-4 align-middle font-display text-sm font-semibold text-gold truncate",
													children: prop.price
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-4 align-middle",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 whitespace-nowrap",
														children: prop.type
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-4 align-middle",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-block rounded-full bg-gold/10 text-gold text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 border border-gold/20 whitespace-nowrap",
														children: prop.tag
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 pl-4 pr-8 align-middle text-right",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-end gap-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => openEditForm(prop),
															className: "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 hover:border-gold hover:text-gold hover:bg-gold/5 dark:hover:bg-gold/10 transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95",
															title: "Edit Listing",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-4 w-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => handleDelete(prop.id),
															className: "flex h-10 w-10 items-center justify-center rounded-full border border-red-200 dark:border-red-950/40 bg-white dark:bg-neutral-950 text-red-500 hover:border-red-600 hover:text-red-600 hover:bg-red-500/5 transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95",
															title: "Delete Listing",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
														})]
													})
												})
											]
										}, prop.id))
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "block md:hidden space-y-4",
							children: allProps.filter((p) => {
								const q = searchQuery.toLowerCase().trim();
								if (!q) return true;
								return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
							}).map((prop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-5 shadow-sm space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-16 w-20 overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex shrink-0 items-center justify-center text-[8px] uppercase tracking-wider text-muted-foreground select-none",
											children: prop.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: prop.image,
												alt: prop.name,
												className: "h-full w-full object-cover"
											}) : "No Pic"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-sm leading-tight text-primary dark:text-white",
													children: prop.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-2xs text-muted-foreground",
													children: prop.location
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-sm text-gold font-bold",
													children: prop.price
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 text-muted-foreground",
											children: prop.type
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-gold/10 text-gold text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5",
											children: prop.tag
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => openEditForm(prop),
											className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3.5 w-3.5" }), " Edit"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleDelete(prop.id),
											className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-red-200/60 dark:border-red-950/40 py-3 text-xs font-semibold uppercase tracking-wider text-red-500 hover:bg-red-500/10 transition cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
										})]
									})
								]
							}, prop.id))
						}),
						allProps.filter((p) => {
							const q = searchQuery.toLowerCase().trim();
							if (!q) return true;
							return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
						}).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-neutral-900/40 text-center py-16 text-muted-foreground text-sm",
							children: allProps.length === 0 ? "No listings in active memory. Click 'Add Property' to populate items!" : "No matching listings found for your search."
						})
					]
				})
			]
		})
	});
}
//#endregion
export { AdminPage as component };
