const announcements = [
    {
      id: 1,
      title: "Grip Aşısı Kampanyası",
      description: "Grip aşıları ASM'mizde ücretsiz olarak yapılmaktadır.",
    },
  ];
  
  export default function Announcements() {
    return (
      <section id="announcements" className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-poppins font-semibold text-center text-primary">
            Duyurular
          </h2>
          <div className="mt-10 space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-6 bg-white shadow-md rounded-md"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {announcement.title}
                </h3>
                <p className="mt-2 text-text">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  