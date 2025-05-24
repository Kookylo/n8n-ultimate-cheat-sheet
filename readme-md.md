# 🚀 n8n Ultimate Cheat Sheet - Interactive Reference

<div align="center">

**The most comprehensive interactive reference for n8n expressions & functions**

[![GitHub stars](https://img.shields.io/github/stars/Kookylo/n8n-ultimate-cheat-sheet?style=social)](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Kookylo/n8n-ultimate-cheat-sheet?style=social)](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Kookylo/n8n-ultimate-cheat-sheet)](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/issues)

[📖 View Live Interactive Cheat Sheet](https://kookylo.github.io/n8n-ultimate-cheat-sheet) • [🐛 Report Bug](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/issues) • [💡 Request Feature](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/issues)

</div>

---

## ⚡ What This Is

Stop searching through documentation! This interactive cheat sheet contains **everything** you need to master n8n expressions:

- 🎯 **500+ Real Examples** - Copy, paste, and go!
- 🛡️ **Error-Safe Patterns** - Avoid common pitfalls
- 🚀 **Performance Tips** - Write faster workflows
- 📱 **Mobile Friendly** - Reference anywhere
- 🔍 **Searchable** - Find functions instantly
- 📋 **Copy-Paste Ready** - Every example is functional

## 🎉 Features

### 🧭 Quick Navigation
Jump directly to any category:
- **Basic Data Access** - Get fields, access nodes, work with JSON
- **Date & Time Functions** - Format dates, calculate differences
- **String Manipulation** - Transform text, extract data, validation
- **Array Processing** - Filter, map, reduce, sort data lists
- **Conditional Logic** - IF/THEN statements, complex conditions
- **Mathematical Operations** - Calculations, statistics, formulas
- **Object Manipulation** - Build objects, merge data
- **Multi-Node Data** - Combine data from multiple workflow steps
- **Error Handling** - Prevent errors, safe access, defaults
- **Advanced Patterns** - Complex transformations, regex
- **API & HTTP Helpers** - URL building, headers, authentication
- **Real-World Examples** - User management, e-commerce, data processing

### 🔥 Interactive Features
- **One-Click Copy** - Copy any code example instantly
- **Live Search** - Search 500+ functions and examples
- **Collapsible Sections** - Organized accordion interface
- **Difficulty Filtering** - Filter by Beginner/Intermediate/Advanced
- **Mobile Responsive** - Perfect on any device

## 🚀 Quick Start Examples

### Basic Data Access
```javascript
{{ $json.fieldName }}                    // Get field from current item
{{ $('Node Name').item.json.field }}     // Data from specific node
{{ $json.items?.[0] }}                   // Safe array access
```

### Date Functions
```javascript
{{ $now.format('YYYY-MM-DD') }}          // 2024-01-15
{{ $now.plus({days: 7}) }}               // 7 days from now
{{ $now.diff('2024-01-01', 'days') }}    // Days between dates
```

### String Manipulation
```javascript
{{ $json.name.toLowerCase() }}           // convert to lowercase
{{ $json.email.split('@')[0] }}          // Username from email
{{ $json.text.slice(0, 50) }}            // First 50 characters
```

### Array Processing
```javascript
{{ $json.items.length }}                 // Count array items
{{ $json.items.filter(item => item.active) }}   // Filter items
{{ $json.items.map(item => item.name) }}        // Extract field from all items
```

## 📁 Repository Structure

```
n8n-ultimate-cheat-sheet/
├── index.html          # Main interactive cheat sheet
├── README.md          # This file
└── assets/           # Images and additional resources (coming soon)
```

## 🛠️ Local Development

Want to run this locally or contribute?

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kookylo/n8n-ultimate-cheat-sheet.git
   cd n8n-ultimate-cheat-sheet
   ```

2. **Open in browser:**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

## 🤝 Contributing

This is a **community-driven** resource! Help make it even better:

### 🎯 Ways to Contribute
- 🐛 **Report Issues** - Found something wrong? [Open an issue](https://github.com/Kookylo/n8n-ultimate-cheat-sheet/issues)
- 💡 **Suggest Functions** - Know a useful pattern? Share it!
- 📖 **Improve Examples** - Make examples clearer or add use cases
- 🌍 **Add Translations** - Help make this global
- ⭐ **Star the Repo** - Help others discover this resource

### 📋 Contribution Guidelines
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-function`)
3. **Commit** your changes (`git commit -m 'Add amazing function example'`)
4. **Push** to the branch (`git push origin feature/amazing-function`)
5. **Open** a Pull Request

## 🎓 Related Resources

### Official n8n Resources
- [📚 n8n Official Documentation](https://docs.n8n.io/)
- [💬 n8n Community Forum](https://community.n8n.io/)
- [🎯 n8n Workflow Templates](https://n8n.io/workflows/)
- [🛠️ n8n GitHub Repository](https://github.com/n8n-io/n8n)

### Learning Resources
- [📱 JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [⏰ Luxon DateTime Documentation](https://moment.github.io/luxon/)
- [🔤 Regular Expressions Guide](https://regexr.com/)

## 📊 Stats & Analytics

- **Functions Covered:** 500+
- **Categories:** 12+
- **Real-World Examples:** 100+
- **Copy-Paste Ready:** 100%
- **Mobile Friendly:** ✅
- **Searchable:** ✅

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **n8n Team** - For creating an amazing automation platform
- **n8n Community** - For inspiration and real-world examples
- **Contributors** - Everyone who helps improve this resource

---

<div align="center">

**⭐ Star this repo if it helped you!**

**Made with ❤️ for the n8n community by [Kookylo](https://github.com/Kookylo)**

[🔝 Back to Top](#-n8n-ultimate-cheat-sheet---interactive-reference)

</div>