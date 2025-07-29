import React, { useState } from 'react';
import { Building, MapPin, Phone, Mail, Globe, Camera, Save } from 'lucide-react';

const BusinessProfile = ({ user, setUser }) => {
  const [profile, setProfile] = useState({
    businessName: 'Solar Solutions Pro',
    description: 'Leading provider of high-quality solar energy solutions',
    address: '123 Green Energy St, Eco City, EC 12345',
    phone: '+1 (555) 123-4567',
    email: user?.email || '',
    website: 'https://solarsolutions.pro',
    logo: null,
    certifications: ['Solar Installation Certified', 'Green Energy Partner'],
    established: '2020'
  });

  const handleInputChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile({
          ...profile,
          logo: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save profile logic here
    alert('Business profile updated successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Business Profile</h1>
          <p className="text-gray-600">Manage your business information and settings</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
          <Building className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Solar Contributor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 space-y-6">
            {/* Business Logo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Business Logo</label>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-green-500 rounded-xl flex items-center justify-center overflow-hidden">
                  {profile.logo ? (
                    <img src={profile.logo} alt="Business Logo" className="w-full h-full object-cover" />
                  ) : (
                    <Building className="w-12 h-12 text-white" />
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Upload Logo
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={profile.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Established</label>
                <input
                  type="text"
                  name="established"
                  value={profile.established}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
              <textarea
                name="description"
                value={profile.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Describe your solar business..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  name="website"
                  value={profile.website}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Profile
              </button>
            </div>
          </form>
        </div>

        {/* Profile Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Completion</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Overall Progress</span>
                <span className="font-semibold text-green-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Basic Information Complete
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Contact Details Added
                </div>
                <div className="flex items-center text-yellow-600">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Business Logo Optional
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
            <div className="space-y-3">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-500 rounded-xl shadow-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Contributor Benefits</h3>
            <ul className="space-y-2 text-sm text-yellow-100">
              <li>• Earn from every product sale</li>
              <li>• Access to premium analytics</li>
              <li>• Priority customer support</li>
              <li>• Monthly performance bonuses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;