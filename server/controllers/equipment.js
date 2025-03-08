const prisma = require("../config/prisma");

exports.read = async (req, res) => {
  try {
    const data = await prisma.equipment.findMany({
      include: {
        years: {
          select: {
            years: true,
          },
        },
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.readCategory = async (req, res) => {
  try{
    const category = await prisma.category.findMany();
    res.status(200).json(category);
  }catch(err){
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
}

exports.readByYear = async (req, res) => {
  const { selectedYear } = req.body;

  try {
    const data = await prisma.equipment.findMany({
      where: {
        years: {
          years: Number(selectedYear),
        },
      },
      include: {
        years: {
          select: {
            years: true,
          },
        },
      },
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.create = async (req, res) => {
  try {
    const {
      equipment_id,
      name,
      qty,
      purchase_year,
      model,
      status,
      categoryId,
      room,
    } = req.body;

    console.log(equipment_id, name, qty, purchase_year, model, status, categoryId);
    const year = await prisma.years.findFirst({
      where: {
        years : Number(purchase_year),
      },
    });

    if (!year) {
      return res.status(400).json({ message: "Year not found" });
    }


    await prisma.equipment.create({
      data: {
        equipment_id: equipment_id,
        name: name,
        qty: qty,
        purchase_year_Id: year.id,
        model: model,
        status: status,
        categoryId: categoryId,
        room : room 
      },
    });
    res.status(200).json({ message: "Equipment Created" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.removeEquipment = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.equipment.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "Equipment Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
