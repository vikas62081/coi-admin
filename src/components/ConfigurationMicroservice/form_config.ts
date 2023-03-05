export const userConfig = [
    {
      title: "Tenant",
      name: "tenant_name",
      type: "select",
      required: true,
      size: "small",
      choices: [
        { title: "One", value: 1 },
        { title: "Two", value: 2 },
      ],
    },
    {
      title: "Service Name",
      name: "provider_name",
      type: "select",
      required: true,
      size: "small",
      choices: [
        { title: "Option1", value: 1 },
        { title: "Option2", value: 2 },
      ],
    },
    {
      title: "Configuration Name",
      name: "name",
      type: "select",
      required: true,
      size: "small",
      choices: [
        { title: "Option1", value: 1 },
        { title: "Option2", value: 2 },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "select",
      required: true,
      size: "small",
      choices: [
        { title: "Option1", value: 1 },
        { title: "Option2", value: 2 },
      ],
    },
    {
      title: "Visible to Client",
      name: "is_visible_to_client",
      type: "switch",
      required: true,
    },
    {
      title: "System Configuration",
      name: "is_system",
      type: "switch",
      required: true,
    },
    {
      title: "Deleted",
      name: "is_deleted",
      type: "switch",
      required: true,
    },
  ];
