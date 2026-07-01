import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getStoredProperties, saveStoredProperties, type Property } from "@/data/properties";
import { Plus, Trash2, Edit3, Save, RotateCcw, Lock, Eye, EyeOff, LayoutDashboard, Search, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

// Predefined mock image choices
const MOCK_IMAGES = [
  { value: "/src/assets/property-1.jpg", label: "Modern Residence (Property 1)" },
  { value: "/src/assets/property-2.jpg", label: "Cozy House (Property 2)" },
  { value: "/src/assets/property-3.jpg", label: "Skyline Tower (Property 3)" },
  { value: "/src/assets/property-4.jpg", label: "Forest Estate (Property 4)" },
  { value: "/src/assets/property-5.jpg", label: "Beach Villa (Property 5)" },
  { value: "/src/assets/property-6.jpg", label: "Prestige Mansion (Property 6)" },
];

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Listings state
  const [allProps, setAllProps] = useState<Property[]>([]);
  const [editingProp, setEditingProp] = useState<Property | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Form states
  const [formData, setFormData] = useState({
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
    type: "Lot" as Property["type"],
    category: "lot" as Property["category"],
    details: "",
  });

  // Pre-load items and check authentication state from session storage
  useEffect(() => {
    setAllProps(getStoredProperties());
    if (typeof window !== "undefined") {
      const authenticated = sessionStorage.getItem("cicerra_admin_auth");
      if (authenticated === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default broker app password: "cicerraadmin"
    if (password === "cicerraadmin" || password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("cicerra_admin_auth", "true");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cicerra_auth_change"));
      }
      toast.success("Access granted. Welcome back, Ryan!");
    } else {
      toast.error("Incorrect administrator password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("cicerra_admin_auth");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cicerra_auth_change"));
    }
    toast.info("Logged out of the administration panel.");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all modifications? This restores the 9 default listings.")) {
      const pass = prompt("Please enter the administrator password to confirm database reset:");
      if (pass === "admin123" || pass === "cicerraadmin") {
        localStorage.removeItem("cicerra_properties");
        toast.success("Database has been reset successfully!");
        window.location.reload();
      } else if (pass !== null) {
        toast.error("Incorrect password. Reset aborted.");
      }
    }
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
      details: "",
    });
  };

  const openEditForm = (prop: Property) => {
    setIsAddMode(false);
    setEditingProp(prop);
    
    // Check if the image matches preloaded assets, otherwise set custom image
    const isMock = prop.image ? MOCK_IMAGES.some(img => img.value === prop.image) : false;

    setFormData({
      id: prop.id,
      name: prop.name,
      image: isMock ? (prop.image || "") : "",
      customImage: isMock ? "" : (prop.image || ""),
      location: prop.location,
      price: prop.price,
      beds: prop.beds !== undefined ? String(prop.beds) : "",
      baths: prop.baths !== undefined ? String(prop.baths) : "",
      lot: prop.lot,
      tag: prop.tag,
      type: prop.type,
      category: prop.category || "lot",
      details: prop.details || "",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      if (confirm("Warning: This action is permanent and cannot be undone. Are you absolutely sure you want to delete this property?")) {
        const updated = allProps.filter((p) => p.id !== id);
        setAllProps(updated);
        saveStoredProperties(updated);
        toast.success("Listing deleted successfully!");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        toast.error("Image file size is too large (limit is 2.5MB).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          customImage: base64String,
        }));
        toast.success("Image selected successfully from your computer!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Please enter a property name.");
      return;
    }

    if (!confirm("Are you sure you want to save this listing?")) {
      return;
    }

    if (!confirm("Please verify: Are you absolutely sure all details are correct and ready to be published?")) {
      return;
    }

    const finalImage = formData.customImage.trim() || formData.image || undefined;

    const propertyPayload: Property = {
      id: formData.id,
      name: formData.name,
      image: finalImage,
      location: formData.location,
      price: formData.price,
      lot: formData.lot,
      tag: formData.tag,
      type: formData.type,
      category: formData.category,
      beds: formData.beds ? Number(formData.beds) : undefined,
      baths: formData.baths ? Number(formData.baths) : undefined,
      details: formData.details.trim() || undefined,
    };

    let updated: Property[] = [];
    if (isAddMode) {
      updated = [...allProps, propertyPayload];
      toast.success("Listing added successfully!");
    } else {
      updated = allProps.map((p) => (p.id === formData.id ? propertyPayload : p));
      toast.success("Listing updated successfully!");
    }

    setAllProps(updated);
    saveStoredProperties(updated);
    setEditingProp(null);
    setIsAddMode(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#051C3F] px-6 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold mb-6">
            <Lock className="h-6 w-6" />
          </div>
          
          <h1 className="font-display text-2xl text-white">Cicerra Portal</h1>
          <p className="mt-2 text-xs text-white/60 tracking-wide uppercase">ADMINISTRATION PANEL</p>
          
          <form onSubmit={handleLogin} className="mt-8 text-left">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-5 pr-12 text-sm text-white placeholder-white/30 outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            
            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-gold py-4 text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/15"
            >
              Sign In
            </button>
          </form>
          
          <p className="mt-6 text-2xs text-white/30">
            Authorized brokers and admin personnel only.<br />
            Tip: Use default pass <code className="text-gold font-bold">admin123</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-primary pt-32 pb-20 dark:bg-neutral-950 dark:text-white">
      <div className="container-rail">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-neutral-200/60 pb-8 mb-10 dark:border-neutral-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-gold font-bold mb-2">
              Cicerra Realty Services
            </div>
            <h1 className="font-display text-4xl sm:text-5xl">Listing Manager</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Real-time client catalog and dynamic search filter administration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={openAddForm}
              className="inline-flex items-center gap-2 rounded-full bg-[#1B365D] dark:bg-gold text-white dark:text-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider shadow hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Plus className="h-4 w-4" /> Add Property
            </button>
          </div>
        </div>

        {/* Edit Form Modal/Panel */}
        {(isAddMode || editingProp) && (
          <div className="mb-12 rounded-3xl border border-gold/30 bg-[#FAF9F6] dark:bg-neutral-900/60 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 border-b border-neutral-200/60 dark:border-neutral-800 pb-4">
              <h2 className="font-display text-2xl text-foreground m-0">
                {isAddMode ? "New Property Listing" : `Edit: ${editingProp?.name}`}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setEditingProp(null);
                  setIsAddMode(false);
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back
              </button>
            </div>
            <form onSubmit={handleSave} className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Property Title / Development Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Orchard Residential Estate"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Location (must match search format)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dasmariñas, Cavite"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Price / Amortization Info
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₱4,800,000 or ₱18,000/month"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Sqm Size / Layout bounds
                </label>
                <input
                  type="text"
                  placeholder="e.g. 240 sqm or 120 - 328 sqm"
                  value={formData.lot}
                  onChange={(e) => setFormData({ ...formData, lot: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Property Category Filter
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as Property["category"] })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                >
                  <option value="lot">Lots Only (lot)</option>
                  <option value="house">House and Lot (house)</option>
                  <option value="condo">Condominium (condo)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Developer / Tag Label
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rockwell Land or Sta. Lucia Land"
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Property Search Filter Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as Property["type"] })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                >
                  <option value="Lot">Lot Only (Lot)</option>
                  <option value="House and Lot">House and Lot</option>
                  <option value="Condominium">Condominium</option>
                  <option value="Commercial Space">Commercial Space</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Beds (Optional)
                  </label>
                  <input
                    type="number"
                    placeholder="None"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Baths (Optional)
                  </label>
                  <input
                    type="number"
                    placeholder="None"
                    value={formData.baths}
                    onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Listing Image
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 bg-white dark:bg-neutral-900/60 shadow-sm">
                  {/* Image Preview Box */}
                  <div className="h-24 w-36 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex shrink-0 items-center justify-center select-none text-center">
                    {formData.customImage || formData.image ? (
                      <img
                        src={formData.customImage || formData.image}
                        alt="Listing Preview"
                        className="h-full w-full object-cover animate-fade-in"
                      />
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold px-4">No Image Selected</span>
                    )}
                  </div>

                  <div className="w-full text-center sm:text-left flex flex-wrap items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      id="admin-image-upload"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="admin-image-upload"
                      className="inline-flex items-center gap-2 rounded-xl bg-gold/10 border border-gold/30 hover:bg-gold/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gold cursor-pointer transition active:scale-95"
                    >
                      Choose Image from Computer
                    </label>

                    {(formData.customImage || formData.image) && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, customImage: "", image: "" })}
                        className="inline-flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-red-500 transition active:scale-95 cursor-pointer"
                      >
                        Remove
                      </button>
                    )}
                    
                    <p className="w-full mt-2 text-[10px] text-muted-foreground">
                      Click the button to select an image from your computer, or click "Remove Picture" to post with no image.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Listing Details / Long Description (e.g. accreditation copy, marketing info)
                </label>
                <textarea
                  rows={6}
                  placeholder="Paste longer details, marketing write-up, sta. lucia land partnership notifications, or contact information here..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3.5 text-sm outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-y"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditingProp(null);
                    setIsAddMode(false);
                  }}
                  className="rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-gold-soft hover:scale-[1.02] transition"
                >
                  <Save className="h-4 w-4" /> Save Listing
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Minimalist Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search listings by title, location, developer, or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-3.5 pl-12 pr-6 text-sm text-primary dark:text-white placeholder-neutral-400 outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 shadow-2xs"
          />
        </div>

        {/* Responsive Listings Catalog */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden md:block rounded-3xl border border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-neutral-900/40 overflow-hidden shadow-sm">
            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-neutral-200/60 dark:border-neutral-800 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 bg-neutral-50/50 dark:bg-neutral-900/30">
                    <th className="py-4 pl-8 pr-4 align-middle w-[8%]">Image</th>
                    <th className="py-4 px-4 align-middle w-[25%]">Property / Dev Title</th>
                    <th className="py-4 px-4 align-middle w-[18%]">Location</th>
                    <th className="py-4 px-4 align-middle w-[13%]">Price</th>
                    <th className="py-4 px-4 align-middle w-[10%]">Type</th>
                    <th className="py-4 px-4 align-middle w-[15%]">Developer</th>
                    <th className="py-4 pl-4 pr-8 align-middle w-[11%] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/40 dark:divide-neutral-800/40">
                  {allProps
                    .filter((p) => {
                      const q = searchQuery.toLowerCase().trim();
                      if (!q) return true;
                      return (
                        p.name.toLowerCase().includes(q) ||
                        p.location.toLowerCase().includes(q) ||
                        p.type.toLowerCase().includes(q) ||
                        p.tag.toLowerCase().includes(q)
                      );
                    })
                    .map((prop) => (
                      <tr key={prop.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                        <td className="py-4 pl-8 pr-4 align-middle">
                          <div className="h-12 w-16 overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex shrink-0 items-center justify-center text-[8px] uppercase tracking-wider text-muted-foreground select-none">
                            {prop.image ? (
                              <img src={prop.image} alt={prop.name} className="h-full w-full object-cover" />
                            ) : (
                              "No Pic"
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 align-middle">
                          <div className="font-semibold text-sm leading-tight text-primary dark:text-white truncate" title={prop.name}>{prop.name}</div>
                          <div className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase font-semibold">ID: {prop.id}</div>
                        </td>
                        <td className="py-4 px-4 align-middle text-sm text-neutral-600 dark:text-neutral-300 truncate" title={prop.location}>{prop.location}</td>
                        <td className="py-4 px-4 align-middle font-display text-sm font-semibold text-gold truncate">{prop.price}</td>
                        <td className="py-4 px-4 align-middle">
                          <span className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 whitespace-nowrap">
                            {prop.type}
                          </span>
                        </td>
                        <td className="py-4 px-4 align-middle">
                          <span className="inline-block rounded-full bg-gold/10 text-gold text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 border border-gold/20 whitespace-nowrap">
                            {prop.tag}
                          </span>
                        </td>
                        <td className="py-4 pl-4 pr-8 align-middle text-right">
                          <div className="flex items-center justify-end gap-2.5">
                            <button
                              onClick={() => openEditForm(prop)}
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 hover:border-gold hover:text-gold hover:bg-gold/5 dark:hover:bg-gold/10 transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                              title="Edit Listing"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(prop.id)}
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 dark:border-red-950/40 bg-white dark:bg-neutral-950 text-red-500 hover:border-red-600 hover:text-red-600 hover:bg-red-500/5 transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                              title="Delete Listing"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card List View */}
          <div className="block md:hidden space-y-4">
            {allProps
              .filter((p) => {
                const q = searchQuery.toLowerCase().trim();
                if (!q) return true;
                return (
                  p.name.toLowerCase().includes(q) ||
                  p.location.toLowerCase().includes(q) ||
                  p.type.toLowerCase().includes(q) ||
                  p.tag.toLowerCase().includes(q)
                );
              })
              .map((prop) => (
                <div key={prop.id} className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-5 shadow-sm space-y-4">
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="h-16 w-20 overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex shrink-0 items-center justify-center text-[8px] uppercase tracking-wider text-muted-foreground select-none">
                      {prop.image ? (
                        <img src={prop.image} alt={prop.name} className="h-full w-full object-cover" />
                      ) : (
                        "No Pic"
                      )}
                    </div>
                    {/* Metadata */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm leading-tight text-primary dark:text-white">{prop.name}</h3>
                      <p className="text-2xs text-muted-foreground">{prop.location}</p>
                      <p className="font-display text-sm text-gold font-bold">{prop.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 text-muted-foreground">
                      {prop.type}
                    </span>
                    <span className="inline-block rounded-full bg-gold/10 text-gold text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5">
                      {prop.tag}
                    </span>
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                    <button
                      onClick={() => openEditForm(prop)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition cursor-pointer"
                    >
                      <Edit3 className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prop.id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-red-200/60 dark:border-red-950/40 py-3 text-xs font-semibold uppercase tracking-wider text-red-500 hover:bg-red-500/10 transition cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Empty search results fallback */}
          {allProps.filter((p) => {
            const q = searchQuery.toLowerCase().trim();
            if (!q) return true;
            return (
              p.name.toLowerCase().includes(q) ||
              p.location.toLowerCase().includes(q) ||
              p.type.toLowerCase().includes(q) ||
              p.tag.toLowerCase().includes(q)
            );
          }).length === 0 && (
            <div className="rounded-3xl border border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-neutral-900/40 text-center py-16 text-muted-foreground text-sm">
              {allProps.length === 0
                ? "No listings in active memory. Click 'Add Property' to populate items!"
                : "No matching listings found for your search."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
