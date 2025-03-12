# Hopps Website Development Checklist
A comprehensive checklist for developing the Hopps website using Next.js 14, Firebase, Tailwind CSS, and shadcn/ui. This guide covers authentication, global components, landing pages, dashboards, and more — helping you track progress and stay organized. 🚀

### Foundation Setup  
- [ ] Create new Next.js 14 project  
- [ ] Install Tailwind CSS  
- [ ] Configure shadcn/ui base components  
- [ ] Create `/src/lib/firebase` directory  
- [ ] Add Firebase config files  
- [ ] Set up environment variables  
- [ ] Initialize Firebase Authentication  
- [ ] Configure Firestore database  
- [ ] Create global CSS variables for pastel theme  
- [ ] Set up basic layout component  
- [ ] Create error handling utilities  

---

### Authentication System  
- [ ] Build login page container  
- [ ] Create role selection buttons  
- [ ] Implement Google auth provider  
- [ ] Create auth state listener  
- [ ] Set up Firestore user document template  
- [ ] Add role field to user documents  
- [ ] Create auth error messages  
- [ ] Implement password reset flow  
- [ ] Add email verification check  
- [ ] Create logout functionality  

---

### Global Components  
- [ ] Build header navigation  
- [ ] Create footer component  
- [ ] Make mobile responsive menu  
- [ ] Design primary CTA buttons  
- [ ] Create loading skeletons  
- [ ] Build error state components  
- [ ] Implement toast notifications  
- [ ] Create form validation messages  

---

### Landing Page - General Users  
- [ ] Hero section with value proposition  
- [ ] Features grid (3 columns)  
- [ ] Testimonial carousel  
- [ ] Statistics counter component  
- [ ] Search functionality placeholder  
- [ ] Download app CTA section  
- [ ] FAQ accordion  
- [ ] Newsletter signup form  

---

### Landing Page - Restaurant Partners  
- [ ] Partner benefits section  
- [ ] Walk-in analytics preview  
- [ ] Onboarding steps visualization  
- [ ] Pricing comparison table (Free vs Paid)  
- [ ] Profile claiming CTA  
- [ ] Partner success stories  
- [ ] Support information block  

---

### Landing Page - Event Organizers  
- [ ] Ticket sales projection component  
- [ ] Audience reach visualization  
- [ ] Event promotion features list  
- [ ] Registration process timeline  
- [ ] Organizer toolkit preview  
- [ ] Payment integration badges  
- [ ] Social proof section  

---

### Restaurant Onboarding  
- [ ] Claim profile search form  
- [ ] Location autocomplete  
- [ ] Business verification docs upload  
- [ ] Brand selection interface  
- [ ] Multi-step form container  
- [ ] Category selection grid  
- [ ] Keyword hierarchy navigation  
- [ ] Selection summary preview  
- [ ] Form progress indicator  
- [ ] Data validation checks  

---

### Event Organizer Flow  
- [ ] Event type selector  
- [ ] Date/time picker  
- [ ] Ticket tier configuration  
- [ ] Capacity limits input  
- [ ] Promo code generator  
- [ ] Social sharing controls  
- [ ] Organizer profile setup  
- [ ] Payment method connection  

---

### Dashboards  
- [ ] Restaurant analytics overview  
- [ ] Walk-in heatmap  
- [ ] Menu/offer management table  
- [ ] Event performance metrics  
- [ ] Ticket sales timeline  
- [ ] Attendee demographics chart  
- [ ] Admin verification queue  
- [ ] Keyword management interface  
- [ ] User role permissions  

---

### Admin Panel  
- [ ] Admin login gate  
- [ ] Profile verification tool  
- [ ] Content moderation interface  
- [ ] Keyword taxonomy editor  
- [ ] Advertisement slot manager  
- [ ] System health monitor  
- [ ] Audit log viewer  
- [ ] Bulk import/export  

---

### Advertisement System  
- [ ] Ad banner component  
- [ ] Targeting filters  
- [ ] Budget calculator  
- [ ] Performance analytics  
- [ ] Ad approval workflow  
- [ ] Payment tracking  
- [ ] Creative guidelines  

---

### Performance Optimization  
- [ ] Firestore query caching  
- [ ] Image optimization  
- [ ] Code splitting  
- [ ] Lazy loading  
- [ ] Bundle analysis  
- [ ] CDN configuration  

---

### Context Management Guide  
When hitting context limits, include these files in new chat:  
- `tailwind.config.js`  
- `/src/lib/firebase/config.ts`  
- `/src/styles/globals.css`  
- `/src/components/ui/button.tsx`  
- Current feature's main component file  
- Related Firestore collection schema  

---

### Tracking Tips  
**Use Notion database with columns:**  
✅ Task Name  
✅ Status (Todo/In Progress/Done)  
✅ Context Group  
✅ Last Updated  

**Batch similar tasks** (e.g., all form validations)  
**Prioritize vertical slices** (e.g., complete Restaurant Onboarding flow end-to-end before moving to Events)  
